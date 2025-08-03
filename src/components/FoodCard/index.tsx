import { Button } from '../Button'
import { Container, Description, Title, FoodImage } from './styles'
import food from '../../assets/images/food.png'

export const FoodCard = () => {
  return (
    <Container>
      <FoodImage src={food} alt="Imagem da estabelecimento" />

      <Title>Nome da Comida</Title>

      <Description>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Description>

      <Button type="button" title="Ver cardápio" to="#">
        Adicionar ao carrinho
      </Button>
    </Container>
  )
}
