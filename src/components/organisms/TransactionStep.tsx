import { FaRunning, FaTrophy, FaWallet } from 'react-icons/fa';

import Step from '@/components/molecules/Step';
const TransactionStep = () => {
  return (
    <section id='transaction_step' className='container mx-auto pt-10 pb-10'>
      <div className='container mx-auto'>
        <div className='w-full px-4'>
          <div className='mb-16 text-center'>
            <h4 className='mb-2 font-semibold text-gray-600 md:text-3xl'>
              Just in 3 Steps
            </h4>
            <p className='text-gray-600'>
              You will become a Pro Gamers and be able say GG Gimang!
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 gap-9 md:grid-cols-3'>
            <Step
              title='Start'
              desc='Pilih salah satu game yang diinginkan'
              icon={<FaRunning className='text-2xl text-gray-400' />}
            />
            <Step
              title='Fill Up'
              desc='Top up sesuai dengan nominal yang tersedia'
              icon={<FaWallet className='text-2xl text-gray-400' />}
            />
            <Step
              title='Be a Winner'
              desc='Siap digunakan untuk improve permainan kamu'
              icon={<FaTrophy className='text-2xl text-gray-400' />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionStep;
