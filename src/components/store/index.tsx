import { configureStore } from '@reduxjs/toolkit'
import { api } from '../../services/api'
import cartReducer from './reducers/cart'
import checkoutReducer from './reducers/checkout'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    [api.reducerPath]: api.reducer // Adiciona o reducer do RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // Adiciona o middleware do RTK Query
})

export type RootState = ReturnType<typeof store.getState> // Renomeei RootReducer para RootState, que é o nome padrão
export type AppDispatch = typeof store.dispatch
