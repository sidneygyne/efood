import { HeroContainer } from './styles'
import HeroImage from '../../assets/images/hero.png'

export const Hero = () => {
  return (
    <HeroContainer>
      <img src={HeroImage} alt="Welcome to Our Restaurant" />
    </HeroContainer>
  )
}
