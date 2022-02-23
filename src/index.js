import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';		// * импортируем компонент из app.js

// import './index.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
