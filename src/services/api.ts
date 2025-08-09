import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { Restaurant } from '../models/Restaurant'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => 'restaurantes'
    }),
    getRestaurantById: builder.query({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

// const api = axios.create({
//   baseURL: 'https://ebac-fake-api.vercel.app/api/efood'
// })

// export const getRestaurantePorId = (id: string) => {
//   return api.get(`/restaurantes/${id}`)
// }

// export const getRestaurants = async (): Promise<Restaurant[]> => {
//   const response = await api.get<Restaurant[]>('/restaurantes')
//   return response.data
// }

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
