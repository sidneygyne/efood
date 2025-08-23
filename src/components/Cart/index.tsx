import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../store'
import { close, removeItem } from '../store/reducers/cart'

import { Button } from '../Button'

import lixeira from '../../assets/images/lixeira.png'

import {
  CartContainer,
  CartItem,
  Close,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'
import { openCheckout } from '../store/reducers/checkout'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const handleRemoveItem = (id: number | string) => {
    dispatch(removeItem(id.toString()))
    console.log('Remover item:', id)
  }

  const goToCheckout = () => {
    dispatch(close())
    dispatch(openCheckout())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{parseToBrl(item.preco)}</span>
                    {/* <span>{item.quantity}</span> */}
                  </div>
                  <Close
                    onClick={() => handleRemoveItem(item.id)}
                    type="button"
                    style={{ backgroundImage: `url(${lixeira})` }}
                  />
                </CartItem>
              ))}
            </ul>
            {/* <Quantity>{items.length} comida(s) no carrinho</Quantity> */}
            <Prices>
              <p>Valor total</p>
              <p>
                {parseToBrl(
                  getTotalPrice(
                    items.filter(
                      (item): item is typeof item & { id: number } =>
                        typeof item.id === 'number'
                    )
                  )
                )}
              </p>
            </Prices>
            <div className="containerButton">
              <Button
                onClick={goToCheckout}
                title="Clique aqui para continuar com a compra"
                type="button"
                variant="primary"
              >
                Continuar com a compra
              </Button>
            </div>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra.
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}
