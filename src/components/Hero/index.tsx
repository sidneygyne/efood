// import { Link } from 'react-router-dom'
import { HeroContainer } from './styles'
import heroBackground from '../../assets/images/vector.png'

import { Logo } from '../Logo'

const Hero = () => (
  <HeroContainer backgroundImage={heroBackground}>
    <Logo />
    <p>Viva experiências gastronômicas no conforto da sua casa</p>
  </HeroContainer>
)

export default Hero
