import { StoreCard } from '../StoreCard'
import { ContainerLojas } from './style'

export const StoresContainer = () => {
  return (
    <div className="container">
      <ContainerLojas>
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ContainerLojas>
    </div>
  )
}
