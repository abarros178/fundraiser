import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { AppTheme } from './theme'
import AppLayout from './layout/AppLayout';
import { Aprendiendo } from './Aprendiendo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AppTheme>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </AppTheme>
    </HashRouter>
  </React.StrictMode>
);

