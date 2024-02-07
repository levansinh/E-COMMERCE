import { FC, Suspense } from 'react';
import { Outlet, RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';
import NotFound from '@/pages/Notfound';
import MainLayout from '@/layouts/MainLayout';
import { AuthenticationType } from '@/types/common';
import { AUTH_URL, PUBLIC_URL } from './urls';

interface IProtectedRouterProps {
  isAuth: AuthenticationType;
  children?: JSX.Element;
}

export const ProtectedRouter: FC<IProtectedRouterProps> = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to={AUTH_URL.login} />;
  }

  return children || <Outlet />;
};

export const RejectedRouter: FC<IProtectedRouterProps> = ({ isAuth, children }) => {
  if (isAuth) {
    return <Navigate to={PUBLIC_URL.home} />;
  }

  return children || <Outlet />;
};

const routers: RouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: () => import('@/features/HomePage')
      },
      {
        path: '/products',
        children: [
          {
            index: true,
            lazy: () => import('@/features/ProductPage')
          },
          {
            path: ':slug',
            lazy: () => import('@/features/ProductDetailPage')
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    element: <RejectedRouter isAuth={true} />,
    children: [
      {
        path: 'login',
        element: <MainLayout />,
        lazy: () => import('@/features/SignInPage')
      },
      {
        path: 'register',
        element: <MainLayout />,
        lazy: () => import('@/features/RegisterPage')
      }
    ]
  },
  {
    path: '',
    element: <ProtectedRouter isAuth={false} />,
    children: [
      {
        path: 'profile',
        element: <MainLayout />,
        lazy: () => import('@/features/HomePage')
      }
    ]
  },
  {
    path: '/internal-server-error',
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    )
  },
  {
    path: '*',
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    )
  }
];

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routers);
