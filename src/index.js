import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchStocks } from './store/stocks/stocksSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchStocks());

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
