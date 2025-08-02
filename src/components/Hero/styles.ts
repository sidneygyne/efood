import styled from 'styled-components'

interface HeroContainerProps {
  backgroundImage: string
}

export const HeroContainer = styled.section<HeroContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 408px;
  width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    margin: 50px auto 138px auto;
  }

  p {
    font-size: 3rem;
    font-weight: 900;
    margin: 0 216px 40px 216px;
  }
`
