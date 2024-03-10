import { lazy } from 'react';

import { type IRoute } from '@/types/routes';
import { AUTH_URL } from '@/constants/routerUrl';

const SignInPage = lazy(() => import('@/features/SignInPage/pages/SignInPage'));

const signInPage: IRoute[] = [
  {
    path: AUTH_URL.login,
    page: <SignInPage />
  }
];

export default signInPage;
