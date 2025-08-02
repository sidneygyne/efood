// import { Link } from 'react-router-dom'
import { HeroContainer } from './styles'
import heroBackground from '../../assets/images/vector.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <HeroContainer backgroundImage={heroBackground}>
    <h1>
      <img src={logo} alt="Efood" />
    </h1>
    <p>Viva experiências gastronômicas no conforto da sua casa</p>
  </HeroContainer>
)

export default Hero
