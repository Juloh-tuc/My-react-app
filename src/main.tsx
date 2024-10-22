import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';
import './index.css';

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`index.html <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
