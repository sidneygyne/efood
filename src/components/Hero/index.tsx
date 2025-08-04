import { HeroContainer, HeroImage } from './styles'
import HeroImagePng from '../../assets/images/hero.png'

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src={HeroImagePng} alt="Welcome to Our Restaurant" />
    </HeroContainer>
  )
}
