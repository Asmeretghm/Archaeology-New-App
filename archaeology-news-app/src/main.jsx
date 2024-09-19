import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is present
import { StrictMode } from 'react'; // Import StrictMode
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary router components
import App from './App.jsx';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>

    <App />



  </StrictMode>
);


