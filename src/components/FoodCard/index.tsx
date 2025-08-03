import { Button } from '../Button'
import { Container, Description, Title, FoodImage } from './styles'
import food from '../../assets/images/food.png'

type Props = {
  nome: string
  descricao: string
  foto: string
}

export const FoodCard = ({ nome, descricao, foto }: Props) => {
  return (
    <Container>
      <FoodImage src={foto} alt={nome} />

      <Title>{nome}</Title>

      <Description>{descricao}</Description>

      <Button type="button" title="Ver cardápio" to="#">
        Adicionar ao carrinho
      </Button>
    </Container>
  )
}
