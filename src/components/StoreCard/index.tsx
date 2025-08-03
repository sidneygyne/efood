import { Button } from '../Button'
import imagemDoEstabelecimento from '../../assets/images/loja.png'
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
  return (
    <Container>
      <ContainerImage>
        <img src={imagemDoEstabelecimento} alt="Imagem da estabelecimento" />
        <Tags>
          <Tag>Destaque</Tag>
          <Tag>Tipo de comida</Tag>
        </Tags>
      </ContainerImage>
      <ContainerDescription>
        <ContainerTitle>
          <Title>Nome da Loja</Title>
          <Assessment>
            <p>8.7</p>
            <img src={star} alt="Estrela" />
          </Assessment>
        </ContainerTitle>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
        <Button type="link" title="Ver cardápio" to="/perfil">
          Saiba mais
        </Button>
      </ContainerDescription>
    </Container>
  )
}
