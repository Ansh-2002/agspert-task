import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import LoginPage from './components/pages/LoginPage';
import SaleOrdersPage from './components/pages/SaleOrdersPage';
import ProtectedRoute from './components/ProtectedRoute';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { GlobalProvider } from './context/GlobalContext';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'sale-orders',
            element: <SaleOrdersPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/login" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </GlobalProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
