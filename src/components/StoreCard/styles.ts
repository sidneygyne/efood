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
  height: 268px;
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
  font-size: 1.125rem;
  font-weight: 700;
  display: block;

  margin-left: 8px;
`
export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  display: block;
  margin: 0 8px 16px 8px;
`
