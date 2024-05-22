import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assests/SAMAN.TTF';
global.url = "http://192.168.9.251:5001/"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
