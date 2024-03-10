import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface IQuantity {
  flexCol?: boolean;
}

export default function Quantity({ flexCol }: IQuantity) {
  const [quantity, setQuantity] = useState<number>(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div>
      <form className='max-w-xs mx-auto'>
        <div className={`relative flex items-center ${flexCol && 'flex-col-reverse'}`}>
          <button
            onClick={handleDecrement}
            type='button'
            id='decrement-button'
            className='flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-6 w-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          >
            <FaMinus />
          </button>
          <input
            type='text'
            id='counter-input'
            data-input-counter
            className='flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-xl font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center'
            value={quantity}
            required
          />
          <button
            type='button'
            onClick={handleIncrement}
            id='increment-button'
            className='flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-6 w-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
          >
            <FaPlus />
          </button>
        </div>
      </form>
    </div>
  );
}
