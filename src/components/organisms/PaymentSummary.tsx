const PaymentSummary = () => {
  return (
    <>
      <div className='mt-8 rounded-lg bg-slate-200 p-2 font-bold'>
        Payment Summary
      </div>
      <div className='flex'>
        <div className='mt-4 grid grid-cols-2 md:gap-x-52 lg:gap-x-52'>
          <div className='title-order'>
            <div className='font-semibold'>My Bank Account </div>
            <div className='font-semibold'>Payment Type</div>
            <div className='font-semibold'>Bank Name</div>
            <div className='font-semibold'>Bank Account Name</div>
            <div className='font-semibold'>Bank Account Number</div>
          </div>
          <div className='value-order'>
            <div>Rhypaa Dhiyaa Zahroo</div>
            <div>Transfer</div>
            <div>BCA</div>
            <div>M. Husni Nur Fadillah</div>
            <div>112319012</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSummary;
