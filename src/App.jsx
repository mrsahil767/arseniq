import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Categories from './pages/Categories'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="categories" element={<Categories />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App