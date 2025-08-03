import logoEfood from '../../assets/images/logo.png'
import { LogoContainer } from './styles'

type Props = {
  marginpadrao?: boolean
}

export const Logo = ({ marginpadrao }: Props) => {
  return (
    <LogoContainer marginpadrao={marginpadrao}>
      <img src={logoEfood} alt="Efood" />
    </LogoContainer>
  )
}
