import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'

type Props = {
  variant: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<Props>`
  display: inline-block;
  width: ${(props) => (props.variant === 'primary' ? 'auto' : 'fit-content')};
  background-color: ${colors.orange};
  border: 0px solid transparent;
  font-size: 14px;
  font-weight: 700;
  margin: ${(props) => (props.variant === 'primary' ? '8px' : '20px 0 0')};
  padding: ${(props) => (props.variant === 'primary' ? '4px 0px' : '4px 7px')};
  color: ${colors.red};
  cursor: pointer;
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
