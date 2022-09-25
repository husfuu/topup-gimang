import Image from 'next/image';

import SignInForm from '@/components/organisms/SignInForm';

const SignIn = () => {
  return (
    <div className='h-screen'>
      <div className='container mx-auto grid h-screen grid-cols-1 place-items-center md:grid-cols-2'>
        <div className='mb-10 w-full px-4 md:w-1/2'>
          <Image
            src='/images/login.svg'
            width={500}
            height={500}
            alt='login ilustration from undraw'
          />
        </div>
        <div className='w-full self-center px-4'>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
