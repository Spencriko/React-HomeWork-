import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // New change!
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
