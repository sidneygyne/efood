import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../../models/Restaurant'

export interface CartItem {
  id?: number
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
        (item) => item.nome === action.payload.nome
      )
      if (itemIndex >= 0) {
        // Se já existe, só incrementa a quantidade
        state.items[itemIndex].quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      // Remove pelo nome do item (ou id, se tiver)
      state.items = state.items.filter((item) => item.nome !== action.payload)
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
