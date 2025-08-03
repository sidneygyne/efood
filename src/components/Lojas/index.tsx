import { CardLoja } from '../CardLoja'
import { ContainerLojas } from './style'

export const Lojas = () => {
  return (
    <div className="container">
      <ContainerLojas>
        <CardLoja />
        <CardLoja />
        <CardLoja />
        <CardLoja />
        <CardLoja />
        <CardLoja />
        <CardLoja />
        <CardLoja />
      </ContainerLojas>
    </div>
  )
}
