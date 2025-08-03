import { useRestaurants } from '../../hooks/useRestaurants'
import { Button } from '../Button'
import star from '../../assets/images/star.png'
import {
  Description,
  Title,
  Container,
  ContainerImage,
  Tags,
  Tag,
  ContainerDescription,
  ContainerTitle,
  Assessment
} from './styles'

export const StoreCard = () => {
  const { restaurants, isLoading, error } = useRestaurants()

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar os dados.</p>

  return (
    <>
      {restaurants.map((rest) => (
        <Container key={rest.id}>
          <ContainerImage>
            <img src={rest.capa} alt={rest.titulo} />
            <Tags>
              <Tag className={rest.destacado ? '' : 'nao-destaque'}>
                {rest.destacado ? 'Destaque da Semana' : ''}
              </Tag>
              <Tag>{rest.tipo}</Tag>
            </Tags>
          </ContainerImage>
          <ContainerDescription>
            <ContainerTitle>
              <Title>{rest.titulo}</Title>
              <Assessment>
                <p>{rest.avaliacao}</p>
                <img src={star} alt="Estrela" />
              </Assessment>
            </ContainerTitle>
            <Description>{rest.descricao}</Description>
            <Button
              type="link"
              title="Ver cardápio"
              to={`/restaurant/${rest.id}`}
            >
              Saiba mais
            </Button>
          </ContainerDescription>
        </Container>
      ))}
    </>
  )
}
