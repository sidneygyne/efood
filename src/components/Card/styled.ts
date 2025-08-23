import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  margin: 32px 8px 0px;

  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    font-style: bold;
    color: ${colors.darkOrange};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    font-style: regular;
    color: ${colors.darkOrange};
    margin-bottom: 24px;
  }
`
