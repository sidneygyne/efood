import { useState } from 'react'
import { Button } from '../Button'
import {
  Container,
  Description,
  Title,
  FoodImage,
  ModalOverlay,
  ModalContent
} from './styles'
import { parseToBrl } from '../../utils'
import closeIcon from '../../assets/images/close.png'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
  // nomeRestaurante?: string // Uncomment if needed
}

export const FoodCard = ({ nome, descricao, foto, porcao, preco }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)

  const closeModal = () => {
    setModalAberta(false)
  }

  return (
    <>
      <Container>
        <FoodImage src={foto} alt={nome} />

        <Title>{nome}</Title>

        <Description>{descricao}</Description>

        <Button
          type="button"
          title="Ver cardápio"
          variant="primary"
          to="#"
          onClick={() => setModalAberta(true)}
        >
          Mais detalhes
        </Button>
      </Container>
      {modalAberta && (
        <ModalOverlay onClick={() => setModalAberta(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img
              className="close-icon"
              src={closeIcon}
              alt="ícone fechar"
              onClick={closeModal}
            />
            <FoodImage src={foto} alt={nome} />

            <div>
              <Title>{nome}</Title>
              <div className="description">
                <Description>{descricao}</Description>
                <Description>{porcao}</Description>
              </div>

              <Button
                type="button"
                title="Adicionar ao carrinho"
                variant="secondary"
                to="#"
                onClick={() => {
                  // ação para adicionar ao carrinho
                  setModalAberta(false)
                }}
              >
                {`Adicionar ao carrinho -  ${parseToBrl(preco)}`}
              </Button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}
