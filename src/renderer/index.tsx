import { createRoot } from 'react-dom/client';
import { AppProvider } from '@context/AppContext';
import App from '@util/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/App.css';
import { MemoryRouter as Router } from 'react-router-dom';
import Index from '@routes/index';

const app = new App();
// @ts-ignore
window.app = app;
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <Router>
    {/* @ts-ignore */}
    <AppProvider value={window.app}>
      <Index />
    </AppProvider>
  </Router>
);
