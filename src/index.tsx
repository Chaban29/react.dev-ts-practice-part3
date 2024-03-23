import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import './App';
import './App.css';
import { StrictMode } from 'react';

const rootElement = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLDivElement
);

rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);
