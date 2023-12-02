import BreadCrumb from 'src/components/Breadcrumb'
import ProductBriefing from 'src/components/ProductBriefing'
import { PATH_PUBLIC } from 'src/routes/path'

function ProductDetailPage() {
  const dataBreadCrumb = [
    { label: 'Sản phẩm', path: PATH_PUBLIC.product.index },
    { label: '1231', path: '#' }
  ]
  return (
    <div className=''>
      <BreadCrumb data={dataBreadCrumb} />
     <ProductBriefing />
    </div>
  )
}
export const Component = ProductDetailPage
