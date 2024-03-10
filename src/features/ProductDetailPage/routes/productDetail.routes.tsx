import { lazy } from 'react';

import { type IRoute } from '@/types/routes';
import { PUBLIC_URL } from '@/constants/routerUrl';

const ProductDetailPage = lazy(() => import('@/features/ProductDetailPage/pages/ProductDetailPage'));

const productDetailPage: IRoute[] = [
  {
    path: PUBLIC_URL.product.index,
    page: <ProductDetailPage />,
    params: ':slug'
  }
];

export default productDetailPage;
