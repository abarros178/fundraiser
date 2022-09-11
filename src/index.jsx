import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { AppTheme } from './theme'
import AppLayout from './layout/AppLayout';
import { Aprendiendo } from './Aprendiendo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>
);

