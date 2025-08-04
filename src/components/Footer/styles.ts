// import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import colors from '../../styles/colors'

export const ContainerFooter = styled.footer`
  background-color: ${colors.darkOrange};
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 0.625rem;
    margin-bottom: 40px;
    text-align: center;
  }
`
export const SocialMedia = styled.ul`
  font-size: 14px;
  margin-top: 32px;
  margin: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`
