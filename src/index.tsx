import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then((registration) => {
//       console.log('SW registered: ', registration);
//     }).catch((registrationError) => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
