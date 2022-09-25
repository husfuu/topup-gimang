import { NumericFormat } from 'react-number-format';

import Sidebar from '@/components/organisms/Sidebar';
import TransactionStatus from '@/components/organisms/TransactionStatus';
import TransactionTable from '@/components/organisms/TransactionTable';

const TransactionDashboard = () => {
  return (
    <>
      <div className='flex flex-row'>
        <Sidebar />
        <div className='mt-20 pl-60'>
          <h2 className='text-gray-500'>Transaction Histories</h2>
          <p className='text-lg text-slate-400'> You have spent</p>
          <p className='mb-4 text-3xl text-gray-400'>
            <NumericFormat
              displayType='text'
              value={500000}
              prefix='Rp. '
              thousandSeparator='.'
              decimalSeparator=','
            />
          </p>
          <TransactionStatus />
          <h2 className='text-gray-500'>Latest Transactions</h2>
          <TransactionTable />
        </div>
      </div>
    </>
  );
};

export default TransactionDashboard;
