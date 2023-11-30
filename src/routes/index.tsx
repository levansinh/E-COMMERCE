import { RouteObject, createBrowserRouter } from 'react-router-dom'
import NotFound from 'src/components/NotFound'
import MainLayout from 'src/layouts/MainLayout'

const routers: RouteObject[] = [
  {
    path: '/auth',
    errorElement: <NotFound />,
    element: <MainLayout />,
    children: [
      {
        path: 'login',
        lazy: () => import('src/pages/SignInPage')
      },
      {
        path: 'register',
        lazy: () => import('src/pages/RegisterPage')
      }
    ]
  },
  {
    path: '/',
    errorElement: <NotFound />,
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: () => import('src/pages/HomePage')
      },
      {
        path: '/products',
        lazy: () => import('src/pages/ProductPage')
      }
    ]
  }
]

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routers)
