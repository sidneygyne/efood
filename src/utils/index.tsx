import { MenuItem, Restaurant } from '../models/Restaurant'

//Formata preço
export const parseToBrl = (amout = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amout)
}

// esta diferente conferir
export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return (accumulator += currentItem.preco)
    }
    return 0
  }, 0)
}
