import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');

window.onerror = function(message, source, lineno, colno, error) {
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="color: red; padding: 20px; background: black; font-family: monospace;">
        <h2>Runtime Error:</h2>
        <p>${message}</p>
        <pre>${error ? error.stack : ''}</pre>
      </div>
    `;
  }
};

try {
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
} catch (e) {
  console.error(e);
  if (rootElement) {
    rootElement.innerHTML = `<div style="color:red; padding: 20px;">Init Error: ${e.message}</div>`;
  }
}
