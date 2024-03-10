import { Spinner } from '@nextui-org/react';
import { FC } from 'react';

const CenterLoadingLayout: FC = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] w-[100vw]'>
      <Spinner />
    </div>
  );
};

export default CenterLoadingLayout;
