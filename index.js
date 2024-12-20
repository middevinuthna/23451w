// src/index.js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18 and above
import App from './App'; // Import the main App component
import './index.css'; // Import global styles

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App name="Vinu" emoji="🦄" />
  </React.StrictMode>
);
