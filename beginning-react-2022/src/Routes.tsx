import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Catalog } from './pages/Catalogs'


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/catalog" element={<Catalog />}/>
      </Routes>
    </Router>
  )
}