import styled from 'styled-components'

interface HeroContainerProps {
  backgroundImage: string
  children?: React.ReactNode
}

export const HeroContainer = styled.section<HeroContainerProps>`
  background-image: url('${(props) => props.backgroundImage}');
  background-size: cover;
  background-position: center;
  height: 408px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    font-size: 36px;
    font-weight: 900;
    margin: 0 400px 40px;
  }
`
