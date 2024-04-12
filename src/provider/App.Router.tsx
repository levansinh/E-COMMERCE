import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { AUTH_URL } from '@/constants/routerUrl';
import { useFetchUser } from '@/apis/user.api';
import publicRoutes from '@/routes/publish';
import renderRoutes from '@/utils/routes.utils';
import { privateRoutes } from '@/routes/private';

const InternalServerError = lazy(() => import('@/pages/ServerError'));
const PageNotFound = lazy(() => import('@/pages/Notfound'));

function PublicOutletRouter() {
  return <Outlet />;
}

interface IProtectedRouterProps {
  isAuth: boolean;
  children?: JSX.Element;
}

/**
 * Define protected router
 */
function ProtectedRouter({ isAuth, children }: IProtectedRouterProps) {
  if (!isAuth) {
    return <Navigate to={AUTH_URL.login} />;
  }

  return children || <Outlet />;
}

/**
 * Define all routes of App
 */
function AppRouter() {
  const { authUser } = useFetchUser();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicOutletRouter />}>{renderRoutes(publicRoutes)}</Route>

          {/* Private Routes */}
          <Route element={<ProtectedRouter isAuth={!!authUser?.data.user.email} />}>
            {renderRoutes(privateRoutes)}
          </Route>

          <Route
            path='/internal-server-error'
            element={
              <Suspense>
                <InternalServerError />
              </Suspense>
            }
          />

          <Route
            path='*'
            element={
              <Suspense>
                <PageNotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>{' '}
    </>
  );
}

export default AppRouter;
