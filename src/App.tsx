import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Rotas from './routes'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">{/* <Header /> */}</div>
      <Rotas />
      {/* <Footer /> */}
      <Cart />
      <Checkout />
    </BrowserRouter>
  )
}

export default App
