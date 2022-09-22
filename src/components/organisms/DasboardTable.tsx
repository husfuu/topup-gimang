import RowTable from '@/components/molecules/RowTable';

const DashboardTable = () => {
  return (
    <table className='mt-4 border-collapse border-spacing-2 rounded border-slate-400  shadow-md'>
      <thead className='h-9 bg-gray-600 text-white'>
        <tr>
          <th className='w-44 border border-slate-300 '>Game</th>
          <th className='w-32 border border-slate-300'>Item</th>
          <th className='w-44 border border-slate-300'>Price</th>
          <th className='w-60 border border-slate-300'>Status</th>
        </tr>
      </thead>
      <tbody>
        <RowTable />
        <RowTable />
        <RowTable />
        <RowTable />
      </tbody>
    </table>
  );
};

export default DashboardTable;
