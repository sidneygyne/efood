import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Rotas from './routes'
import { Cart } from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">{/* <Header /> */}</div>
      <Rotas />
      {/* <Footer /> */}
      <Cart />
    </BrowserRouter>
  )
}

export default App
