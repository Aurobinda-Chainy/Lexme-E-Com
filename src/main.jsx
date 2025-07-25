import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './screens/cart/CartContext.jsx'
import { WishlistProvider } from './screens/wishList/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
         <WishlistProvider>
        <App />
    </WishlistProvider>
    </CartProvider>
  </StrictMode>
)
