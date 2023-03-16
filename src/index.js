import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchStocks } from './store/stock/stocksSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

const token = process.env.REACT_APP_TOKEN;

store.dispatch(fetchStocks(token));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
