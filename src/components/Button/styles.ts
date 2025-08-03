import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${colors.orange};
  border: 0px solid transparent;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0px;
  color: ${colors.red};
  cursor: pointer;
  margin: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.red};
  font-size: 0.875rem;
  font-weight: 700;
  padding: 4px 6px;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  text-decoration: none;
  color: ${colors.white};
  cursor: pointer;
`
