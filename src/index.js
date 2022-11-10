import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "@fortawesome/fontawesome-free/js/brands.js";
import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/fontawesome.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
          <App/>
    </BrowserRouter>
  </React.StrictMode>);
