const CheckoutConfirmation = () => {
  return (
    <>
      <div className='mt-4'>
        <input
          id='default-checkbox'
          type='checkbox'
          // checked={checkbox}
          // onChange={() => setCheckbox(!checkbox)}
          className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
        />
        <label
          htmlFor='default-checkbox'
          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-900'
        >
          I have transferred the money
        </label>
      </div>
      <div className='mt-4 flex justify-center'>
        <button
          type='button'
          className='w-full rounded-lg bg-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto'
          // onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
};

export default CheckoutConfirmation;
