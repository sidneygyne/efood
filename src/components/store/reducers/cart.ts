import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../../models/Restaurant'

export interface CartItem {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
  quantity: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        // Se já existe, só incrementa a quantidade
        // state.items[itemIndex].quantity += action.payload.quantity
        alert('Poduto já está no carrinho!')
      } else {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id.toString() !== action.payload
      )
    },
    clearCart(state) {
      state.items = []
    },

    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { addItem, removeItem, open, close, clearCart } = cartSlice.actions

export default cartSlice.reducer
