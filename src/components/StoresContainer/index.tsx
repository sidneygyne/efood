import { StoreCard } from '../StoreCard'
import { ContainerLojas } from './style'

export const StoresContainer = () => {
  return (
    <div className="container">
      <ContainerLojas>
        <StoreCard />
      </ContainerLojas>
    </div>
  )
}
