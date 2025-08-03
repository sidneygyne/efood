// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  width: 304px;
  height: 416px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.red};
  margin: 10px;
`

export const FoodImage = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
  display: block;
  width: 304px;
  height: 167px;
  object-fit: cover;
  padding: 8px;
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
  display: block;
  margin: 0 8px;
  color: ${colors.white};
`
