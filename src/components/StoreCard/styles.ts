// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  width: 472px;
`

export const ContainerImage = styled.div`
  position: relative;

  img {
    display: block;
    width: 472px;
    height: 217px;
    object-fit: cover;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
  .nao-destaque {
    display: none;
  }
`

export const Tag = styled.p`
  background-color: ${colors.red};
  color: ${colors.orange};
  padding: 6px 4px;
  font-size: 0.8rem;
`
export const ContainerDescription = styled.div`
  border: 1px solid ${colors.red};
  background-color: ${colors.white};
  height: 212px;
`

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const Assessment = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 8px;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  display: block;
  margin-left: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin: 0 8px 16px 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    img {
      height: 16px;
      width: 16px;
      cursor: pointer;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
