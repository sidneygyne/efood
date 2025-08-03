import styled from 'styled-components'

type Props = {
  marginpadrao?: boolean
  children?: React.ReactNode
}

export const LogoContainer = styled.h1<Props>`
  margin: ${(props) =>
    props.marginpadrao ? '40px auto 32px auto' : '50px auto 138px auto'};

  img {
    width: 125px;
    height: 57.5px;
  }
`
