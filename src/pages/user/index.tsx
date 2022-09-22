import DashboardTable from '@/components/organisms/DasboardTable';
import Sidebar from '@/components/organisms/Sidebar';
import TopupCategory from '@/components/organisms/TopupCategory';
const UserDashboard = () => {
  return (
    <>
      <div className='flex flex-row'>
        <Sidebar />
        <div className='mt-20 pl-60'>
          <h2 className='text-gray-500'>Topup Categories</h2>
          <hr />
          <TopupCategory />
          <h2 className='text-gray-500'>Latest Transactions</h2>
          <hr />
          <DashboardTable />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
