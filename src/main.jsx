import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/cart'

import { Routes } from './routes'

import theme from './styles/theme'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </CartProvider>
    </ThemeProvider>
    <ToastContainer position="top-center" autoClose={1000} hideProgressBar={true} theme='dark' toastStyle={{ 
      backgroundColor: "#00111A", 
      border: "2px solid #065E7C",
    }}
      />
  </React.StrictMode>
)
