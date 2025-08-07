import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';           // ✅ THIS LINE was missing
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
