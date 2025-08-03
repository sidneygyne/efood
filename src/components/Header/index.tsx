import { HeroContainer, HeroContent } from './styles'
import { Logo } from '../Logo'
import heroBackground from '../../assets/images/vector.png'

type Props = {
  variant?: 'principal' | 'secundario'
}

export const Header = ({ variant = 'principal' }: Props) => {
  return (
    <HeroContainer backgroundImage={heroBackground} variant={variant}>
      {variant === 'principal' ? (
        <>
          <Logo />
          <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </>
      ) : (
        <>
          <div className="container">
            <p>Restaurantes</p>
            <Logo />
            <p> 0 produto(s) no carrinho</p>
          </div>
        </>
      )}
    </HeroContainer>
  )
}
