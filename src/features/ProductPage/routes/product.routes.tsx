import { lazy } from 'react';

import { type IRoute } from '@/types/routes';
import { PUBLIC_URL } from '@/constants/routerUrl';

const ProductPage = lazy(() => import('@/features/ProductPage/pages/Product'));

const productPage: IRoute[] = [
  {
    path: PUBLIC_URL.product.index,
    page: <ProductPage />
  }
];

export default productPage;
