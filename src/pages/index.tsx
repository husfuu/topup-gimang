/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import Review from '@/components/organisms/Review';
import TransactionStep from '@/components/organisms/TransactionStep';
export default function Home() {
  return (
    <>
      <div className='relative overflow-hidden bg-white'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32'>
            <Navbar />
            <main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>Topup & </span>{' '}
                  <span className='block text-indigo-600 xl:inline'>
                    Become GG Gimang!
                  </span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
                  Kami menyediakan layanan top up voucher games untuk gamers
                  sejati seperti anda.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <a
                      href='#'
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
                    >
                      Get started
                    </a>
                  </div>
                  <div className='mt-3 sm:mt-0 sm:ml-3'>
                    <a
                      href='#'
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg'
                    >
                      Steps
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full'
            src='https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt=''
          />
        </div>
      </div>
      <TransactionStep />
      <Review />
      <Footer />
    </>
  );
}
