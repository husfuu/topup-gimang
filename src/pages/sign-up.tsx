import SignupForm from '@/components/organisms/SignUpForm';

const SignUp = () => {
  return (
    <div className='h-screen'>
      <div className='container mx-auto grid h-screen place-items-center'>
        <div className='self-center px-4'>
          <h1 className='text-font_col mb-4 text-3xl font-bold'>Sign Up</h1>
          <p className='text-font_col mb-4'>Daftar dan bergabung dengan kami</p>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
