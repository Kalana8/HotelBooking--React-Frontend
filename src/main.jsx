// Application entry point: mounts React root and provides global context/providers
import { RoomContext } from './context/RoomContext';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './style/index.css';


// Create the React root at the #root element and render the app
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    // Provide app-wide state (rooms, filters, etc.) via Context
    <RoomContext>
      {/* Enable extra checks and warnings in development */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RoomContext>,
  )