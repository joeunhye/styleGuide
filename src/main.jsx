import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.scss';
import { DarkModeProvider } from "./context/DarkModeContext";
import { DeviceModeProvider } from './context/DeviceModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <DeviceModeProvider>
      <App />
    </DeviceModeProvider>
  </DarkModeProvider>,
)
