import { ReactNode } from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { breakpoints } from '../../styles'

type Props = {
  backgroundImage: string
  variant: 'principal' | 'secundario'
  children: ReactNode
}

export const HeroContainer = styled.header<Props>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: ${(props) => (props.variant === 'principal' ? '408px' : '186px')};
  width: 100%;
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
      props.variant === 'principal' ? '0 100px 40px' : '0'};
  }

  img {
    margin: ${(props) =>
      props.variant === 'principal' ? '40px auto 138px' : '0'};
  }

  h1 {
    margin: ${(props) =>
      props.variant === 'principal' ? '0 400px 40px' : '0'};
  }

  a {
    color: ${colors.red};
    font-weight: 600;
    font-size: 18px;
  }

  .textRestaurant {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: ${(props) => (props.variant === 'principal' ? 'auto' : '186px')};

    img {
      margin: ${(props) =>
        props.variant === 'principal' ? '40px auto 38px' : '0'};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h1 {
      margin: ${(props) => (props.variant === 'principal' ? '0' : '0')};
    }

    p {
      font-size: ${(props) =>
        props.variant === 'principal' ? '32px' : '18px'};
      margin: ${(props) =>
        props.variant === 'principal' ? '0 50px 40px' : '0'};
    }
  }

  @media (max-width: ${breakpoints.cellPhone}) {
    p {
      font-size: ${(props) =>
        props.variant === 'principal' ? '32px' : '18px'};
      margin: ${(props) =>
        props.variant === 'principal' ? '0 20px 40px' : '0'};
    }
  }
`

export const HeroContent = styled.h2`
  font-weight: 600;
`

export const CartButton = styled.span`
  display: flex;
  font-size: 18px;
  font-style: black;
  font-weight: 900;
  cursor: pointer;

  img {
  }
`
