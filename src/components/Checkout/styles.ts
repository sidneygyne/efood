import styled from 'styled-components'
import colors from '../../styles/colors'
import { ButtonContainer } from '../Button/styles'
import { breakpoints } from '../../styles'
// import { TagContainer } from '../Tag/styles'

type RowProps = {
  marginTop?: string
}

type InputGroup = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.darkOrange};
  opacity: 0.7;
`
export const CheckoutAddressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 99;
`
export const Sidebar = styled.aside`
  background: ${colors.red};
  z-index: 1;

  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .entrega {
    display: block;
  }

  .pagamento {
    display: block;
  }

  .twoInputGroup {
    display: flex;
    flex-direction: row;
    gap: 34px;
  }
  .containerButton {
    max-width: 95.5%;
  }

  .buttons {
    margin-top: 16px;
    max-width: 95.5%;
    /* display: flex;
    flex-direction: column;
    gap: 0px; */
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const Title = styled.h2`
  display: block;
  margin: 8px;
  font-size: 16px;
  font-weight: 700;
  font-style: bold;
  line-height: 100%;
  color: ${colors.darkOrange};
  margin-top: 32px;
`

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: column;
  column-gap: 24px;
  /* margin-top: ${(props) => props.marginTop || '0'}; */
  margin: 8px;

  .buttonsContainer {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

export const InputGroup = styled.div<InputGroup>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    font-style: bold;
    display: block;
    color: ${colors.darkOrange};
    margin: 8px 0;
  }

  input,
  select {
    background-color: ${colors.darkOrange};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 8px;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    font-style: bold;
    line-height: 100%;
    color: ${colors.gray};

    &.error {
      border: 4px solid ${colors.error};
    }
  }

  input:focus {
    outline: none;
    box-shadow: none;
  }
`

export const Error = styled.div`
  display: block;
  margin: 32px 8px 0;

  .error-message {
    font-size: 16px;
    font-weight: 700;
    font-style: bold;
    line-height: 100%;
    padding: 0 0 5px;
    color: ${colors.error};
  }
`
