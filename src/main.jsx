import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { FavoritesProvider } from './contexts/FavoritesContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { RecentlyViewedProvider } from './contexts/RecentlyViewedContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RecentlyViewedProvider>
          <FavoritesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FavoritesProvider>
        </RecentlyViewedProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)