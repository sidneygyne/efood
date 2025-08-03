import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import { Perfil } from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    {/* <Route path="/categories" element={<Categories />} /> */}
  </Routes>
)

export default Rotas
