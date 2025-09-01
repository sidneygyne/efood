// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 100%;
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.red};

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
    height: auto;
  }
`

export const FoodImage = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
  display: block;
  width: 304px;
  height: 167px;
  object-fit: cover;
  margin: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 97%;
    height: auto;
  }
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  display: block;
  color: ${colors.white};
  margin-left: 8px;
  margin-bottom: 8px;
`
export const Description = styled.p`
  height: 190px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 0 8px;
  color: ${colors.white};
  display: -webkit-box;
  -webkit-line-clamp: 4; // número de linhas desejadas
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${breakpoints.tablet}) {
    width: 97%;
    height: auto;
  }
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .close-icon {
    display: block;
    position: absolute;
    right: 20px;
    top: 5px;
    z-index: 1;
    margin: 5px;
  }
`

export const ModalContent = styled.div`
  background: ${colors.red};
  color: ${colors.white};
  /* padding: 24px; */
  width: 1024px;
  height: 344px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (max-width: ${breakpoints.tablet}) {
    gap: 0px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  ${FoodImage} {
    height: 280px;
    width: 280px;
    margin: 32px 0 32px 32px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 40px 32px 32px;
      width: auto;
    }
  }

  ${Title} {
    margin: 32px 0 16px;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 32px 10px;
      width: auto;
    }
  }

  .description {
    width: 656px;
    height: 176px;
    display: flex;
    align-content: flex-end;
    gap: 70px;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 32px 10px;
      width: auto;
    }
  }

  ${Description} {
    margin: 0;
    width: auto;
    height: auto;
    -webkit-line-clamp: 8; // número de linhas desejadas
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
    height: auto;

    .description {
      width: auto;
      height: auto;
      margin-right: 20px;
      gap: 30px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    .description {
      gap: 20px;
    }

    button {
      margin: 16px 32px 32px;
    }
  }
`
