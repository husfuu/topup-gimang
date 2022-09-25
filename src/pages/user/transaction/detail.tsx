import Link from 'next/link';
import { BsCheckCircle } from 'react-icons/bs';

import OrderSummary from '@/components/organisms/OrderSummary';
import PaymentSummary from '@/components/organisms/PaymentSummary';

const TransactionDetail = () => {
  return (
    <div className='grid h-screen place-items-center'>
      <div className='md: container mx-auto w-1/3'>
        <div className='flex justify-center text-2xl font-semibold'>
          TOPUP GIMANG
        </div>
        <div className='flex justify-center p-4 text-xl font-bold text-gray-700 '>
          Order #1021
        </div>
        <div className='mt-3 flex justify-center'>
          <div className='grid grid-cols-2 gap-7'>
            <div className='flex gap-1'>
              Status: <BsCheckCircle color='green' /> Paid
            </div>
            <div className=''>Date: 1 Oct, 14:42</div>
          </div>
        </div>
        <OrderSummary />
        <PaymentSummary />
        <div className='mt-7 flex justify-center'>
          <Link
            type='button'
            href='https://wa.me/6287744417665?text=Saya%20tertarik%20dengan%20mobil%20Anda%20yang%20dijual'
          >
            <a className='w-full rounded-lg bg-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto'>
              {' '}
              WhatsApp ke Admin{' '}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
