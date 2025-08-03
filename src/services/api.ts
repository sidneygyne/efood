import axios from 'axios'
import { Restaurant } from '../models/Restaurant'

const api = axios.create({
  baseURL: 'https://ebac-fake-api.vercel.app/api/efood'
})

export const getRestaurantePorId = (id: string) => {
  return api.get(`/restaurantes/${id}`)
}

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await api.get<Restaurant[]>('/restaurantes')
  return response.data
}
