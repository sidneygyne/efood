import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerLojas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
