import cx from 'classnames';
import { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const className = {
    input: cx(
      'form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none'
    ),
    button: cx(
      'inline-block w-full rounded-lg bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
    ),
  };
  return (
    <div className='w-1/2'>
      <div className='mb-6'>
        <input
          type='email'
          className={className.input}
          placeholder='Email Address'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className='mb-6'>
        <input
          type='password'
          className={className.input}
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className='mb-6 flex items-center justify-between'>
        <a
          href='#!'
          className='text-blue-600 transition duration-200 ease-in-out hover:text-blue-700 focus:text-blue-700 active:text-blue-800'
        >
          Forgot password?
        </a>
      </div>

      <button
        type='submit'
        className={className.button}
        data-mdb-ripple='true'
        data-mdb-ripple-colar='light'
        // onClick={onSubmit}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInForm;
