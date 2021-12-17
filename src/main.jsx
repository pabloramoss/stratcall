import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import App from './components/App'
import { ChakraProvider, theme} from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";





ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
