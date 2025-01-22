import 'antd/dist/reset.css';
import './styles/globals.scss';
import './styles/tailwind.css';
import './i18n';

import React from 'react';

import { Provider } from 'jotai';
import ReactDOM from 'react-dom/client';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <ErrorBoundary>
    <Provider>
      <App />
    </Provider>
  </ErrorBoundary>,
);
