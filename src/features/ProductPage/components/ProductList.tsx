import ProductItem from './ProductItem/ProductItem';

const ProductList = () => {
  return (
    <div className='grid grid-cols-2 xl:grid-cols-4 md:grid-cols-4 gap-10'>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductList;
