import ReactDOM from 'react-dom/client'
import App from './App'

import { AuthContextProvider } from './contexts/AuthContext'
import { CartContextProvider } from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  // {/* </React.StrictMode> */}
)
