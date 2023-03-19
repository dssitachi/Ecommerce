import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SideBarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideBarProvider>
    <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </CartProvider>
  </SideBarProvider>
);
