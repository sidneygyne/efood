import styled from 'styled-components'
import colors from '../../styles/colors'
import { ButtonContainer } from '../Button/styles'
// import { TagContainer } from '../Tag/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.darkOrange};
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background: ${colors.red};
  z-index: 1;

  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
    margin: 16px 8px;
  }

  ul {
    margin-top: 32px;
    margin-bottom: 24px;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin: 32px 8px 16px;
  display: flex;
  justify-content: space-between;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.white};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin: 32px 0 16px 0;
`
export const CartItem = styled.li`
  background-color: ${colors.darkOrange};
  position: relative;
  display: flex;
  border-bottom: 1px solid ${colors.orange};
  padding: 8px 8px 12px;
  margin: 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.red};
    font-weight: 900;
    font-style: Black;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${colors.red};
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
  }
`

export const Close = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: transparent;
  position: absolute;
  top: 70px;
  right: 0;
  margin: 8px;
  cursor: pointer;
`
