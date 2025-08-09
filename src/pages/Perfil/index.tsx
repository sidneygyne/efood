import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FoodContainer } from '../../components/FoodContainer'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { useGetRestaurantByIdQuery } from '../../services/api'
import { Hero } from '../../components/Hero'

export const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGetRestaurantByIdQuery(id || '')
  const [comidas, setComidas] = useState([])

  useEffect(() => {
    if (data) {
      setComidas(data.cardapio)
    }
  }, [data])

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar restaurante</p>

  return (
    <div>
      <Header variant="secundario" />
      <Hero />
      <FoodContainer comidas={comidas} />
      <Footer />
    </div>
  )
}
