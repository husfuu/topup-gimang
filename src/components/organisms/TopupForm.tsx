const TopupForm = () => {
  return (
    <div className='mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-3 lg:pl-4'>
      <div className='p-4'>
        <div className='flex flex-col'>
          <h2 className='title-font text-sm tracking-widest text-gray-500'>
            Mobile
          </h2>
          <h1 className='title-font mb-1 text-3xl font-semibold text-gray-600'>
            Call of Duty
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum
            voluptate omnis quo unde quia dolor eaque quidem voluptatem veniam
            fugiat explicabo aut possimus in magnam minima ex, quae perspiciatis
            tenetur rem delectus aliquam. Necessitatibus maxime modi qui ad
            facilis.
          </p>
          <br />
        </div>
        <form className='mx-auto w-full max-w-screen-md'>
          <fieldset className='space-y-6'>
            <div className='items-center justify-between border-b border-gray-300 py-4'>
              {/* nominal */}
              <legend className='mr-4 text-2xl text-gray-500'>
                Nominal Topup
              </legend>
              <p>Kamu dapat memilih voucher dengan nominal yang kamu sukai.</p>
            </div>
            {/* nominal form */}
            <div className='grid gap-6 sm:grid-cols-3'>
              <label
                htmlFor='plan-hobby'
                className='relative flex cursor-pointer flex-col rounded-lg bg-white p-5 shadow-md'
              >
                <span className='mb-3 font-semibold uppercase leading-tight text-gray-500'>
                  Hobby
                </span>
                <span className='font-bold text-gray-900'>
                  <span className='text-4xl'>1</span>
                  <span className='text-2xl uppercase'>GB</span>
                </span>
                <span>
                  <span className='text-xl font-bold text-gray-500'>$</span>
                  <span className='-ml-1 text-xl font-bold text-gray-900'>
                    5
                  </span>
                  <span className='text-xl font-semibold text-gray-500'>/</span>
                  <span className='text-lg font-semibold text-gray-500'>
                    mo
                  </span>
                </span>
                <input
                  type='radio'
                  name='plan'
                  id='plan-hobby'
                  value='hobby'
                  className='absolute h-0 w-0 appearance-none'
                />
                <span
                  aria-hidden='true'
                  className='absolute inset-0 hidden rounded-lg border-2 border-green-500 bg-green-200 bg-opacity-10'
                >
                  <span className='absolute top-4 right-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-200'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5 text-green-600'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </span>
              </label>
              <label
                htmlFor='plan-growth'
                className='relative flex cursor-pointer flex-col rounded-lg bg-white p-5 shadow-md'
              >
                <span className='mb-3 font-semibold uppercase leading-tight text-gray-500'>
                  Growth
                </span>
                <span className='font-bold text-gray-900'>
                  <span className='text-4xl'>5</span>
                  <span className='text-2xl uppercase'>GB</span>
                </span>
                <span>
                  <span className='text-xl font-bold text-gray-500'>$</span>
                  <span className='-ml-1 text-xl font-bold text-gray-900'>
                    10
                  </span>
                  <span className='text-xl font-semibold text-gray-500'>/</span>
                  <span className='text-lg font-semibold text-gray-500'>
                    mo
                  </span>
                </span>
                <input
                  type='radio'
                  name='plan'
                  id='plan-growth'
                  value='growth'
                  className='absolute h-0 w-0 appearance-none'
                />
                <span
                  aria-hidden='true'
                  className='absolute inset-0 hidden rounded-lg border-2 border-green-500 bg-green-200 bg-opacity-10'
                >
                  <span className='absolute top-4 right-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-200'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5 text-green-600'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </span>
              </label>
              <label
                htmlFor='plan-business'
                className='relative flex cursor-pointer flex-col rounded-lg bg-white p-5 shadow-md'
              >
                <span className='mb-3 font-semibold uppercase leading-tight text-gray-500'>
                  Business
                </span>
                <span className='font-bold text-gray-900'>
                  <span className='text-4xl'>10</span>
                  <span className='text-2xl uppercase'>GB</span>
                </span>
                <span>
                  <span className='text-xl font-bold text-gray-500'>$</span>
                  <span className='-ml-1 text-xl font-bold text-gray-900'>
                    15
                  </span>
                  <span className='text-xl font-semibold text-gray-500'>/</span>
                  <span className='text-lg font-semibold text-gray-500'>
                    mo
                  </span>
                </span>
                <input
                  type='radio'
                  name='plan'
                  id='plan-business'
                  value='business'
                  className='absolute h-0 w-0 appearance-none'
                />
                <span
                  aria-hidden='true'
                  className='absolute inset-0 hidden rounded-lg border-2 border-green-500 bg-green-200 bg-opacity-10'
                >
                  <span className='absolute top-4 right-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-200'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5 text-green-600'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </span>
              </label>
              <label
                htmlFor='plan-enterprise'
                className='relative flex cursor-pointer flex-col rounded-lg bg-white p-5 shadow-md'
              >
                <span className='mb-3 font-semibold uppercase leading-tight text-gray-500'>
                  Enterprise
                </span>
                <span className='font-bold text-gray-900'>
                  <span className='text-4xl'>20</span>
                  <span className='text-2xl uppercase'>GB</span>
                </span>
                <span>
                  <span className='text-xl font-bold text-gray-500'>$</span>
                  <span className='-ml-1 text-xl font-bold text-gray-900'>
                    20
                  </span>
                  <span className='text-xl font-semibold text-gray-500'>/</span>
                  <span className='text-lg font-semibold text-gray-500'>
                    mo
                  </span>
                </span>
                <input
                  type='radio'
                  name='plan'
                  id='plan-enterprise'
                  value='enterprise'
                  className='absolute h-0 w-0 appearance-none'
                />
                <span
                  aria-hidden='true'
                  className='absolute inset-0 hidden rounded-lg border-2 border-green-500 bg-green-200 bg-opacity-10'
                >
                  <span className='absolute top-4 right-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-200'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5 text-green-600'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </span>
              </label>
            </div>
          </fieldset>
        </form>

        {/* BANK ACCOUNT FORM */}
        <form className='mt-6'>
          <div className='mb-4 flex flex-col space-y-1 border-b border-gray-300'>
            <p className='mr-4 text-2xl text-gray-500'>Metode Pembayaran</p>
            <p>Silahkan pilih metode pembayaran</p>
          </div>
          {/* bank account form */}
          <div className='grid gap-6 sm:grid-cols-2'>
            <label
              htmlFor='payment-1'
              className='relative flex cursor-pointer flex-col rounded-lg bg-white p-5 shadow-md'
            >
              <span className='mb-3 font-semibold uppercase leading-tight text-gray-500'>
                Transfer
              </span>
              <span className='font-bold text-gray-900'>
                <span className='text-2xl'>BI</span>
              </span>
              <span className='-ml-1 text-xl text-gray-500'>
                Rhypaa Dhiyaa Zahroo
              </span>
              <input
                type='radio'
                name='payment'
                id='payment-1'
                value='bankAccountId-1'
                className='absolute h-0 w-0 appearance-none'
              />
              <span
                aria-hidden='true'
                className='absolute inset-0 hidden rounded-lg border-2 border-green-500 bg-green-200 bg-opacity-10'
              >
                <span className='absolute top-4 right-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5 text-green-600'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              </span>
            </label>
            <label
              htmlFor='payment-2'
              className='relative flex cursor-pointer flex-col rounded-lg bg-white p-5 shadow-md'
            >
              <span className='mb-3 font-semibold uppercase leading-tight text-gray-500'>
                Transfer
              </span>
              <span className='font-bold text-gray-900'>
                <span className='text-2xl'>BNI</span>
              </span>
              <span className='-ml-1 text-xl text-gray-500'>
                M. Husni Nur Fadillah
              </span>
              <input
                type='radio'
                name='payment'
                id='payment-2'
                value='bankAccountId-2'
                className='absolute h-0 w-0 appearance-none'
              />
              <span
                aria-hidden='true'
                className='absolute inset-0 hidden rounded-lg border-2 border-green-500 bg-green-200 bg-opacity-10'
              >
                <span className='absolute top-4 right-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5 text-green-600'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              </span>
            </label>
          </div>
        </form>
        {/* BANK ACCOUNT NAME FORM */}
        <form>
          <label
            htmlFor='small-input'
            className='mt-4 mb-2 mr-4 block text-xl text-gray-500'
          >
            Bank Account Name
          </label>
          <p>
            Masukan nama akun bank yang anda akan gunakan untuk proses transaksi
            ini{' '}
          </p>
          <input
            type='text'
            id='small-input'
            className='my-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
          />
          <button className='rounded bg-gray-500 py-2 px-4 font-bold text-white hover:bg-blue-700'>
            Button
          </button>
        </form>
      </div>
    </div>
  );
};

export default TopupForm;
