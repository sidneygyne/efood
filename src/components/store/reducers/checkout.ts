import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  isOpen: boolean
  step: 1 | 2
}

const initialState: CheckoutState = {
  isOpen: false,
  step: 1
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openCheckout: (state) => {
      state.isOpen = true
      state.step = 1
    },
    closeCheckout: (state) => {
      state.isOpen = false
    },
    goToStep: (state, action: { payload: 1 | 2 }) => {
      state.step = action.payload
    }
  }
})

export const { openCheckout, closeCheckout, goToStep } = checkoutSlice.actions
export default checkoutSlice.reducer
