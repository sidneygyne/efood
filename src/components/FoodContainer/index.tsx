import { MenuItem } from '../../models/Restaurant'
import { FoodCard } from '../FoodCard'
import { Container } from './styles'

type Props = {
  comidas: MenuItem[]
}

export const FoodContainer = ({ comidas }: Props) => {
  return (
    <div className="container">
      <Container>
        {comidas.map((comida) => (
          <FoodCard
            key={comida.id}
            nome={comida.nome}
            descricao={comida.descricao}
            foto={comida.foto}
            porcao={comida.porcao}
            preco={comida.preco}
          />
        ))}
      </Container>
    </div>
  )
}
