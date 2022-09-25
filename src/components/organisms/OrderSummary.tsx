import { NumericFormat } from 'react-number-format';

import TransactionCard from '@/components/molecules/TransactionCard';

const OrderSummary = () => {
  return (
    <>
      <div className='mt-4 rounded-lg bg-slate-200 p-2 font-bold'>
        Order Summary
      </div>

      <TransactionCard />

      <div className='flex'>
        <div className='mt-4 grid grid-cols-2 gap-x-72'>
          <div className='title-order'>
            <div className='font-semibold'>Subtotal</div>
            <div className='font-semibold'>Discount</div>
            <div className='font-semibold'>Tax</div>
            <hr className='border-y-1 border-slate-600' />
            <div className='font-semibold'>Total</div>
          </div>
          <div className='value-order'>
            <div>
              <NumericFormat
                displayType='text'
                value={500000}
                prefix='Rp. '
                thousandSeparator='.'
                decimalSeparator=','
              />
            </div>
            <div>
              <NumericFormat
                displayType='text'
                value={500000}
                prefix='Rp. '
                thousandSeparator='.'
                decimalSeparator=','
              />
            </div>
            <div>
              <NumericFormat
                displayType='text'
                value={67}
                prefix='% '
                thousandSeparator='.'
                decimalSeparator=','
              />
            </div>
            <div>
              <hr className='border-y-1 border-slate-600' />
              <NumericFormat
                displayType='text'
                value={1000000}
                prefix='Rp. '
                thousandSeparator='.'
                decimalSeparator=','
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
