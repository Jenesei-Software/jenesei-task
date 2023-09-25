import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css'
import './styles/fonts.css'
import './styles/variables.css'

import App from './app/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>,
  </React.StrictMode>,
)

