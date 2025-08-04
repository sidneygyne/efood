import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}
export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
      background-color: ${colors.orange};
    color: ${colors.red};
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  a {
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.desktop} ) {
    max-width: 80%;
  }
  }
`
