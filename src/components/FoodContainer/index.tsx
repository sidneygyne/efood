import { FoodCard } from '../FoodCard'
import { Container } from './styles'

export const FoodContainer = () => {
  return (
    <div className="container">
      <Container>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </Container>
    </div>
  )
}
