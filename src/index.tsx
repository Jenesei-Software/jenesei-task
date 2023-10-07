import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css'
import './styles/fonts.css'
import './styles/variables.css'
import './styles/modal.css'

import { App } from './app/app';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>
  // </React.StrictMode>
)

