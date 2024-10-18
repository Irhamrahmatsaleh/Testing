import { createStandaloneToast } from '@chakra-ui/toast';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scrollbar.css";
import App from './tsx/App';
const { ToastContainer, toast } = createStandaloneToast()
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
)
toast({ title: 'Chakra UI' })
