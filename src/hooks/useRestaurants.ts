import { useEffect, useState } from 'react'
import { getRestaurants } from '../services/api'
import { Restaurant } from '../models/Restaurant'

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getRestaurants()
      .then((data) => setRestaurants(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return { restaurants, isLoading, error }
}
