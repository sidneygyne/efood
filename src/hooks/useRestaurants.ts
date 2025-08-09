import { useGetRestaurantsQuery } from '../services/api'
import { Restaurant } from '../models/Restaurant'

type UseRestaurantsResult = {
  restaurants: Restaurant[]
  isLoading: boolean
  error: unknown
}

export const useRestaurants = () => {
  const {
    data: restaurants,
    isLoading,
    error
  } = useGetRestaurantsQuery(undefined)
  // const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState<Error | null>(null)

  return {
    restaurants: restaurants ?? [],
    isLoading,
    error
  }

  // useEffect(() => {
  //   getRestaurants()
  //     .then((data) => setRestaurants(data))
  //     .catch((err) => setError(err))
  //     .finally(() => setIsLoading(false))
  // }, [])

  // return { restaurants, isLoading, error }
}
