import { HeroContainer, HeroImage, Info } from './styles'
import HeroImagePng from '../../assets/images/hero.png'

type HeroProps = {
  image: string
  foodType: string
  restaurantName: string
}

export const Hero = ({ image, foodType, restaurantName }: HeroProps) => {
  return (
    <HeroContainer>
      <HeroImage src={image} alt="Welcome to Our Restaurant" />
      <Info className="container">
        <h3>{foodType}</h3>
        <h2>{restaurantName}</h2>
      </Info>
    </HeroContainer>
  )
}
