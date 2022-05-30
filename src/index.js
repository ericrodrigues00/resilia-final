import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './components/Card/Card';
import { Navbar } from './components/Header/Header';
import { Iniciar } from './components/Landing/Landing';
import GlobalStyle from './styles/GlobalCSS';
import { App } from '../src/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>
);

