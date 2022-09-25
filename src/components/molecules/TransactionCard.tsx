/* eslint-disable @next/next/no-img-element */
import { NumericFormat } from 'react-number-format';
const TransactionCard = () => {
  return (
    <div className='card card-side bg-white shadow'>
      <figure>
        {/* <Image
          src='https://placeimg.com/180/150/arch'
          alt='voucher'
          width={180}
          height={150}
        /> */}
        <img src='https://placeimg.com/180/150/arch' alt='Movie' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-gray-700'>Clash of Clans</h2>
        <p className='text-slate-500'>Mobile</p>
        <p className='text-slate-500'>Item: Jewel 100</p>
        <div className='card-actions justify-end'>
          <NumericFormat
            displayType='text'
            value={500000}
            prefix='Rp. '
            thousandSeparator='.'
            decimalSeparator=','
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
