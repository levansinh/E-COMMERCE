import BreadCrumb from '@/components/Breadcrumb';
import ProductBriefing from '@/components/ProductBriefing';
import { PUBLIC_URL } from '@/routes/urls';

function ProductDetailPage() {
  const dataBreadCrumb = [
    { label: 'Sản phẩm', path: PUBLIC_URL.product.index },
    { label: '1231', path: '#' }
  ];
  return (
    <div className=''>
      <BreadCrumb data={dataBreadCrumb} />
      <ProductBriefing />
    </div>
  );
}
export const Component = ProductDetailPage;
