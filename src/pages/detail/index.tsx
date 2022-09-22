/* eslint-disable @next/next/no-img-element */
import TopupForm from '@/components/organisms/TopupForm';
const GameDetail = () => {
  return (
    <section className='body-font overflow-hidden bg-white text-gray-700'>
      <div className='container mx-auto px-5 py-24'>
        <div className='mx-auto flex flex-wrap justify-center'>
          <img
            alt='voucher'
            className='w-full rounded border border-gray-200 object-cover object-center lg:h-1/2 lg:w-1/4'
            src='https://www.whitmorerarebooks.com/pictures/medium/2465.jpg'
          />
          <TopupForm />
        </div>
      </div>
    </section>
  );
};

export default GameDetail;
