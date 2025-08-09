import { Logo } from '../Logo'
import { ContainerFooter, SocialMedia } from './styles'
import facebook from '../../assets/images/icon-facebook.png'
import instagram from '../../assets/images/icon-instagran.png'
import xtwiter from '../../assets/images/icon-x.png'
import { Link } from 'react-router-dom'

// const currentYear = new Date().getFullYear()

export const Footer = () => (
  <ContainerFooter>
    <Logo marginpadrao />
    <SocialMedia>
      <li>
        <Link to="#">
          <img src={instagram} alt="Instagram" />
        </Link>
      </li>
      <li>
        <Link to="#">
          <img src={facebook} alt="Facebook" />
        </Link>
      </li>
      <li>
        <Link to="#">
          <img src={xtwiter} alt="Instagram" />
        </Link>
      </li>
    </SocialMedia>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </ContainerFooter>
)
