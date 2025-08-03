import { Logo } from '../Logo'
import { ContainerFooter, SocialMedia } from './styles'
import facebook from '../../assets/images/icon-facebook.png'
import instagram from '../../assets/images/icon-instagran.png'
import xtwiter from '../../assets/images/icon-x.png'

// const currentYear = new Date().getFullYear()

export const Footer = () => (
  <ContainerFooter>
    <Logo marginpadrao />
    <SocialMedia>
      <li>
        <a href="#">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={xtwiter} alt="Instagram" />
        </a>
      </li>
    </SocialMedia>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </ContainerFooter>
)
