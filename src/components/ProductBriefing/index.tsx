import ProductSlide from './ProductSlide'
import ProductForm from './ProductForm'
export default function ProductBriefing() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <ProductSlide />
     <ProductForm />
    </div>
  )
}
