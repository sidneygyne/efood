import styled from 'styled-components'
import colors from '../../styles/colors'

export const HeroContainer = styled.div`
  width: 100%;
  display: block;
  object-fit: cover;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); // ajuste a opacidade conforme desejar
    z-index: 1;
    pointer-events: none;
  }
`

export const HeroImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
`

export const Info = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0 32px 170px;

  h3 {
    font-size: 32px;
    font-weight: 100;
    font-style: thin;
    line-height: 100%;
    color: ${colors.white};
    text-transform: capitalize;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    font-style: black;
    line-height: 100%;
    color: ${colors.white};
  }
`
