import { Pagination, PaginationProps } from '@nextui-org/react';

interface IPaginationCustom extends PaginationProps {}

const PaginationCustom = ({ ...passProp }: IPaginationCustom) => {
  return <Pagination {...passProp} initialPage={1} />;
};
export default PaginationCustom;
