import { Link } from 'react-router-dom'
import logoEfood from '../../assets/images/logo.png'
import { LogoContainer } from './styles'

type Props = {
  marginpadrao?: boolean
}

export const Logo = ({ marginpadrao }: Props) => {
  return (
    <LogoContainer marginpadrao={marginpadrao}>
      <Link to="/">
        <img src={logoEfood} alt="Efood" />
      </Link>
    </LogoContainer>
  )
}
