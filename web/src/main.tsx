import ReactDOM from 'react-dom/client'
import App from './App'
import { AddressContextProvider } from './contexts/AddressContext'

import { AuthContextProvider } from './contexts/AuthContext'
import { CartContextProvider } from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <AddressContextProvider>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
    </AddressContextProvider>
  // {/* </React.StrictMode> */}
)
