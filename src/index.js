import React from 'react';
import './index.css';
import App from './App';
import Store from './Store/Store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'

const container=document.getElementById('root');
const root=createRoot(container)
 root.render(<Provider store={Store}>
  <App />
</Provider>,
 )
  
