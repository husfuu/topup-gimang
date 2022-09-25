import { BsCheckCircle } from 'react-icons/bs';

import CheckoutConfirmation from '@/components/organisms/CheckoutConfirmation';
import OrderSummary from '@/components/organisms/OrderSummary';
import PaymentSummary from '@/components/organisms/PaymentSummary';

const Checkout = () => {
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
        <CheckoutConfirmation />
      </div>
    </div>
  );
};

export default Checkout;
