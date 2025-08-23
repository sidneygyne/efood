import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../services/api'
import { RootState } from '../store'
import { clearCart, open } from '../store/reducers/cart'
import { closeCheckout, goToStep } from '../store/reducers/checkout'

import { Button } from '../Button'
import ReactInputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'

import {
  CheckoutAddressContainer,
  InputGroup,
  Overlay,
  Row,
  Sidebar,
  Title,
  Error
} from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'
import { Card } from '../Card'

type Installments = {
  quantity: number
  amount: number
  formattedAmount: string
}

export const Checkout = () => {
  const { isOpen, step } = useSelector((state: RootState) => state.checkout)
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [payWithCard] = useState(true)
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()
  const [installments, setInstallments] = useState<Installments[]>([])
  const totalPrices = getTotalPrice(items)

  const closeCart = () => {
    dispatch(closeCheckout())
    dispatch(goToStep(1)) // volta checkout para o início
    reset() // limpa estado da mutation
  }

  const completePurchase = () => {
    dispatch(closeCheckout())
    dispatch(goToStep(1))
    reset()
    navigate('/')
  }
  const form = useFormik({
    initialValues: {
      fullname: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O nome precisa ter pelo menos 5 caracteres'),

      address: Yup.string().required('Endereço obrigatório'),
      city: Yup.string().required('Cidade obrigatório'),
      cep: Yup.string()
        .required('Campo obrigatório')
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
      number: Yup.string().required('Número obrigatório'),
      complement: Yup.string(),

      cardDisplayName: Yup.string().required('Digite o nome igual do cartão.'),
      cardNumber: Yup.string().required('Digite o número do cartão'),
      expiresMonth: Yup.string()
        .required('Digite mês de vencimento')
        .test('valid-month', 'Mês inválido (01 a 12)', (value) => {
          if (!value) return false
          const month = Number(value)
          return month >= 1 && month <= 12
        }),
      expiresYear: Yup.string()
        .required('Campo obrigatório')
        .test('valid-year', 'Ano inválido', (value) => {
          if (!value) return false
          const currentYear = new Date().getFullYear()
          return Number(value) >= currentYear
        }),
      cardCode: Yup.string().required('Campo obrigatório'),
      installments: Yup.number().min(1).max(6).required('Campo obrigatório')
    }),

    onSubmit: (values) => {
      console.log('Finalizando compra com valores:', values, items)
      purchase({
        delivery: {
          fullname: values.fullname,
          address: values.address,
          city: values.city,
          cep: values.cep,
          number: values.number,
          complement: values.complement
        },
        payment: {
          installments: values.installments,
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) =>
    fieldName in form.touched && fieldName in form.errors

  const getStepErrors = () => {
    return Object.entries(form.errors)
      .filter(([key]) => form.touched[key as keyof typeof form.touched])
      .map(([key, value]) => value)
  }

  useEffect(() => {
    if (totalPrices > 0) {
      const arr: Installments[] = []
      for (let i = 1; i <= 6; i++) {
        arr.push({
          quantity: i,
          amount: totalPrices / i,
          formattedAmount: parseToBrl(totalPrices / i)
        })
      }
      setInstallments(arr)
    }
  }, [totalPrices])

  useEffect(() => {
    if (isSuccess) dispatch(clearCart())
  }, [isSuccess, dispatch])

  // Função para validar o step 1
  const validateStep1 = async () => {
    const errors = await form.validateForm()

    // Campos obrigatórios do step 1
    const step1Fields: (keyof typeof form.values)[] = [
      'fullname',
      'address',
      'city',
      'cep',
      'number'
    ]

    const step1Errors = step1Fields.filter((field) => errors[field])

    if (step1Errors.length === 0) {
      // Tudo ok -> vai para step 2
      dispatch(goToStep(2))
    } else {
      // Marca campos como "tocados" para exibir os erros
      form.setTouched(
        step1Fields.reduce((acc, field) => ({ ...acc, [field]: true }), {})
      )
    }
  }

  if (!isOpen) return null

  return (
    <CheckoutAddressContainer
    // className={isOpen ? 'isOpen' : ''}
    >
      {/* <h1>Teste</h1> */}
      <Overlay onClick={closeCart} />
      <Sidebar>
        {isSuccess && data ? (
          <Card title={`Pedido realizado - ${data.orderId}`}>
            <>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p className="margin-top">
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p className="margin-top">
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p className="margin-top">
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Button
                type="button"
                title="Concluir"
                variant="secondary"
                onClick={() => completePurchase()}
              >
                Concluir
              </Button>
            </>
          </Card>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {step === 1 && (
              <div title="Entrega" className="entrega">
                <>
                  <Title>Entrega</Title>
                  <Row>
                    <InputGroup>
                      <label htmlFor="fullname">Quem irá receber</label>
                      <input
                        id="fullname"
                        type="text"
                        name="fullname"
                        value={form.values.fullname}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('fullname') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('address') ? 'error' : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </InputGroup>
                    <div className="twoInputGroup">
                      <InputGroup>
                        <label htmlFor="cep">CEP</label>
                        <ReactInputMask
                          id="cep"
                          type="string"
                          name="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cep') ? 'error' : ''}
                          mask="99999-999"
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="number">Número</label>
                        <input
                          id="number"
                          type="text"
                          name="number"
                          value={form.values.number}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('number') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </div>

                    <InputGroup>
                      <label htmlFor="complement">Complemento</label>
                      <input
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('complement') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                    <div className="buttonsContainer">
                      <Button
                        type="button"
                        title="Voltar para carrinho"
                        variant="secondary"
                        onClick={() => {
                          dispatch(closeCheckout())
                          dispatch(open())
                        }}
                      >
                        Voltar para carrinho
                      </Button>

                      <Button
                        onClick={validateStep1}
                        type="button"
                        title="Continuar com pagamento"
                        variant="secondary"
                        disabled={isLoading}
                      >
                        Continuar com pagamento
                      </Button>
                    </div>

                    <Error>
                      {getStepErrors().map((error, index) => (
                        <p key={index} className="error-message">
                          {error}
                        </p>
                      ))}
                    </Error>
                  </Row>
                </>
              </div>
            )}

            {step === 2 && (
              <div title="Pagamento" className="pagamento">
                <>
                  <Title>
                    Pagamento - Valor a pagar {parseToBrl(totalPrices)}
                  </Title>
                  <div className="margin-top">
                    <>
                      <Row marginTop="24px">
                        <InputGroup>
                          <label htmlFor="cardDisplayName">
                            Nome no cartão
                          </label>
                          <input
                            id="cardDisplayName"
                            type="text"
                            name="cardDisplayName"
                            value={form.values.cardDisplayName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardDisplayName')
                                ? 'error'
                                : ''
                            }
                          />
                        </InputGroup>

                        <div className="twoInputGroup">
                          <InputGroup>
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <ReactInputMask
                              id="cardNumber"
                              type="text"
                              name="cardNumber"
                              value={form.values.cardNumber}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardNumber') ? 'error' : ''
                              }
                              mask="9999 9999 9999 9999"
                            />
                          </InputGroup>

                          <InputGroup maxWidth="87px">
                            <label htmlFor="cardCode">CVV</label>
                            <ReactInputMask
                              id="cardCode"
                              type="text"
                              name="cardCode"
                              value={form.values.cardCode}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardCode') ? 'error' : ''
                              }
                              mask="999"
                            />
                          </InputGroup>
                        </div>

                        <div className="twoInputGroup">
                          <InputGroup maxWidth="50%">
                            <label htmlFor="expiresMonth">
                              Mês de vencimento
                            </label>
                            <ReactInputMask
                              id="expiresMonth"
                              type="text"
                              name="expiresMonth"
                              value={form.values.expiresMonth}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('expiresMonth')
                                  ? 'error'
                                  : ''
                              }
                              mask="99"
                            />
                          </InputGroup>

                          <InputGroup maxWidth="50%">
                            <label htmlFor="expiresYear">
                              Ano de vencimento
                            </label>
                            <ReactInputMask
                              id="expiresYear"
                              type="text"
                              name="expiresYear"
                              value={form.values.expiresYear}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('expiresYear') ? 'error' : ''
                              }
                              mask="9999"
                            />
                          </InputGroup>
                        </div>

                        <div className="buttonsContainer">
                          <Button
                            onClick={form.handleSubmit}
                            type="submit"
                            variant="secondary"
                            title="Clique aqui para finalizar compra"
                            disabled={isLoading}
                          >
                            {isLoading
                              ? 'Finalizando compra...'
                              : 'Finalizar compra'}
                          </Button>

                          <Button
                            onClick={() => dispatch(goToStep(1))}
                            type="button"
                            variant="secondary"
                            title="Voltar para edição de endereço"
                            disabled={isLoading}
                          >
                            Voltar para edição de endereço
                          </Button>
                        </div>
                        <Error>
                          {getStepErrors().map((error, index) => (
                            <p key={index} className="error-message">
                              {error}
                            </p>
                          ))}
                        </Error>
                      </Row>
                    </>
                  </div>
                </>
              </div>
            )}
          </form>
        )}
      </Sidebar>
    </CheckoutAddressContainer>
  )
}
