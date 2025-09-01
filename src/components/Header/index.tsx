import { CartButton, HeroContainer, HeroContent } from './styles'
import { Logo } from '../Logo'
import heroBackground from '../../assets/images/vector.png'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../store/reducers/cart'
import { Link } from 'react-router-dom'

type Props = {
  variant?: 'principal' | 'secundario'
}

export const Header = ({ variant = 'principal' }: Props) => {
  const dispatch = useDispatch()
  const items = useSelector((state: any) => state.cart.items || [])

  const openCart = () => {
    dispatch(open())
  }

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
            <Link to="/">
              <p className="textRestaurant">Restaurantes</p>
            </Link>
            <Logo />
            <CartButton onClick={openCart}>
              {' '}
              {items.length} produto(s) no carrinho
            </CartButton>
          </div>
        </>
      )}
    </HeroContainer>
  )
}
