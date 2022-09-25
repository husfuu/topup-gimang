import RowTransactionTable from '@/components/molecules/RowTransactionTable';

const TransactionTable = () => {
  return (
    <table className='mt-4 border-collapse border-spacing-2 rounded border-slate-400  shadow-md'>
      <thead className='h-9 bg-gray-600 text-white'>
        <tr>
          <th className='w-44 border border-slate-300 '>Game</th>
          <th className='w-32 border border-slate-300'>Item</th>
          <th className='w-44 border border-slate-300'>Price</th>
          <th className='w-60 border border-slate-300'>Status</th>
          <th className='w-60 border border-slate-300'>Action</th>
        </tr>
      </thead>
      <tbody>
        <RowTransactionTable />
        <RowTransactionTable />
        <RowTransactionTable />
        <RowTransactionTable />
      </tbody>
    </table>
  );
};

export default TransactionTable;
