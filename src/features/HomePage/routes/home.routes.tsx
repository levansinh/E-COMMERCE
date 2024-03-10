import { lazy } from 'react';

import { type IRoute } from '@/types/routes';
import { PUBLIC_URL } from '@/constants/routerUrl';

const HomePage = lazy(() => import('@/features/HomePage/pages/HomePage'));

const homeRoutes: IRoute[] = [
  {
    path: PUBLIC_URL.home,
    page: <HomePage />
  }
];

export default homeRoutes;
