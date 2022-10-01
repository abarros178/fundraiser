import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { AppTheme } from './theme'
import AppLayout from './layout/AppLayout';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <AppTheme>
          <AppLayout>
            <AppRouter />
          </AppLayout>
        </AppTheme>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

