import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FoodContainer } from '../../components/FoodContainer'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { getRestaurantePorId } from '../../services/api'

export const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const [comidas, setComidas] = useState([])

  useEffect(() => {
    if (id) {
      getRestaurantePorId(id).then((res) => {
        setComidas(res.data.cardapio)
      })
    }
  }, [id])

  return (
    <div>
      <Header variant="secundario" />
      <FoodContainer comidas={comidas} />
      <Footer />
    </div>
  )
}
