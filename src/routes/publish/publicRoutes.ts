import { type IRoute } from '@/types/routes';
import homeRoutes from '@/features/HomePage/routes/home.routes';
import signInPage from '@/features/SignInPage/routes/signin.routes';
import productPage from '@/features/ProductPage/routes/product.routes';
import productDetailPage from '@/features/ProductDetailPage/routes/productDetail.routes';

const publicRoutes: IRoute[] = [...homeRoutes, ...signInPage, ...productPage, ...productDetailPage];

export default publicRoutes;
