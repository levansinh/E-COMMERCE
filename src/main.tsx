import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './store/store';
import '@/i18n/i18n';
import App from './App';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
      <ToastContainer />
    </Provider>
  </QueryClientProvider>
);
