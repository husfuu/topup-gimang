import StatusButton from '@/components/molecules/StatusButton';

const TransactionStatus = () => {
  return (
    <>
      <div className='mb-7 mt-4 flex'>
        <StatusButton title='All' active={true} />
        <StatusButton title='Success' active={false} />
        <StatusButton title='Pending' active={false} />
        <StatusButton title='Fail' active={false} />
      </div>
    </>
  );
};

export default TransactionStatus;
