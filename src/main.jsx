import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ChakraProvider, theme} from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { VideosProvider } from './context/VideoContext';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <VideosProvider>
            <App/>
          </VideosProvider>
        </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
