import Image from 'next/image';

export default function Review() {
  return (
    <div className='container mx-auto grid w-full grid-cols-1 justify-center px-4 md:grid-cols-2'>
      <Image
        src='/images/gaming_together.svg'
        alt='gaming together'
        width={400}
        height={400}
      />
      <div className='text-gray-500'>
        <h1 className='mb-2 text-4xl font-bold lg:mt-20'>
          Win the Battle <br /> Be the Champion{' '}
        </h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          repellendus
        </div>
        <div>odit iste natus cumque nulla.</div>
        <div className='py-7'>
          <button className='rounded-full bg-[#AE8CFA] py-4 px-12 font-bold text-white hover:bg-purple-400'>
            Read Story
          </button>
        </div>
      </div>
    </div>
  );
}
