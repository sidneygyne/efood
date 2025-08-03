export interface MenuItem {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

export interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}
