import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'

import theme from './styles/theme'

import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Dish } from './pages/Dish'
import { AddDish } from './pages/AddDish'
import { EditDish } from './pages/EditDish'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditDish />
    </ThemeProvider>
  </React.StrictMode>
)
