import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { NextUIProvider } from '@nextui-org/react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';

import '@/i18n/i18n';
import App from './App';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 20 * 1000,
      retry: 3
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      <App />
    </NextUIProvider>
    <ToastContainer />
  </QueryClientProvider>
);
