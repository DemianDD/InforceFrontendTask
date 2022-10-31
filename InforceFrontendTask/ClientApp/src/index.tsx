import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

(ReactDOM as any).createRoot( document.getElementById("root")).render(<App />);

registerServiceWorker();
