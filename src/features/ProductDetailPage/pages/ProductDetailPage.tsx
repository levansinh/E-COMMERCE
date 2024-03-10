import BreadCrumb from '@/components/Breadcrumb/Breadcrumb';
import { PUBLIC_URL } from '@/constants/routerUrl';
import ProductInformation from '../components/ProductInformation/ProductInformation';
import ProductSlide from '../components/ProductSlide/ProductSlide';

const ProductDetailPage = () => {
  const dataBreadCrumb = [
    { label: 'Sản phẩm', path: PUBLIC_URL.product.index },
    { label: '1231', path: '' }
  ];
  return (
    <div className=''>
      <BreadCrumb data={dataBreadCrumb} />

      <div className='grid grid-cols-1 md:grid-cols-2'>
        <ProductSlide />
        <ProductInformation />
      </div>
    </div>
  );
};
export default ProductDetailPage;
