import Image from 'next/image';
import Link from 'next/link';

const success = () => {
  return (
    <div className='flex h-screen items-center'>
      <div className='container mx-auto my-8 flex flex-col items-center justify-center px-5'>
        <div className='max-w-md text-center'>
          <Image
            src='/images/Complete-checkout-1.png'
            alt='success-checkout'
            height={300}
            width={300}
          />
          <p className='text-2xl font-semibold text-[#324d67] md:text-3xl '>
            Checkout Completed
          </p>
          <p className='mt-4 mb-8 dark:text-gray-400'>
            Thank you for completing your secure online payment with Stripe.{' '}
            <br />
            Now you can check your email for detail payments.
          </p>
          <Link href='/'>
            <a
              rel='noopener noreferrer'
              className='rounded bg-[#548ca8] px-8 py-3 font-semibold text-white hover:bg-[#324d67] '
            >
              Back to homepage
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default success;
