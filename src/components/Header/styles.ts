import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  backgroundImage: string
  variant: 'principal' | 'secundario'
  children: ReactNode
}

export const HeroContainer = styled.div<Props>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: ${(props) => (props.variant === 'principal' ? '408px' : '186px')};
  width: 1366px;
  display: flex;
  flex-direction: ${(props) =>
    props.variant === 'principal' ? 'column' : 'row'};
  align-items: center;
  text-align: center;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: 40px auto;
  }

  p {
    font-size: ${(props) => (props.variant === 'principal' ? '36px' : '18px')};
    font-weight: 900;
    margin: ${(props) =>
      props.variant === 'principal' ? '0 400px 40px' : '0'};
  }

  img {
    margin: ${(props) =>
      props.variant === 'principal' ? '40px auto 138px' : '0'};
  }

  h1 {
    margin: ${(props) =>
      props.variant === 'principal' ? '0 400px 40px' : '0'};
  }
`

export const HeroContent = styled.h2`
  font-weight: 600;
`
