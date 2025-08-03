import styled from 'styled-components'

type Props = {
  marginpadrao?: boolean
  variant?: 'principal' | 'secundario'
  children?: React.ReactNode
}

export const LogoContainer = styled.h1<Props>`
  margin: ${(props) =>
    props.marginpadrao ? '40px auto 32px' : '50px auto 138px'};

  img {
    width: 125px;
    height: 57.5px;
  }
`
