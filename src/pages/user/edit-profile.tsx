import Sidebar from '@/components/organisms/Sidebar';

const EditProfile = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='mt-20 w-1/3 pl-60'>
        <div className='text-2xl font-bold text-gray-500'>My Profile</div>
        <hr />
        <form className='container mt-4'>
          {/* username */}
          <div className='mb-6'>
            <label
              htmlFor='username'
              className='mb-2 block text-sm font-medium text-gray-900 '
            >
              User Name
            </label>
            <input
              type='text'
              id='username'
              className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 '
              placeholder='Enter your username'
              required
            />
          </div>
          {/* fullname */}
          <div className='mb-6'>
            <label
              htmlFor='fullName'
              className='mb-2 block text-sm font-medium text-gray-900 '
            >
              Full name
            </label>
            <input
              type='text'
              id='fullName'
              className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 '
              placeholder='Enter your full name'
              required
            />
          </div>
          {/* email */}
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-medium text-gray-900 '
            >
              Email
            </label>
            <input
              type='text'
              id='email'
              className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 '
              placeholder='Enter your email'
              required
            />
          </div>
          {/* phone */}
          <div className='mb-6'>
            <label
              htmlFor='phone'
              className='mb-2 block text-sm font-medium text-gray-900 '
            >
              Phone
            </label>
            <input
              type='text'
              id='phone'
              className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 '
              placeholder='Enter your phone'
              required
            />
          </div>
          {/* address */}
          <div className='mb-6'>
            <label
              htmlFor='address'
              className='mb-2 block text-sm font-medium text-gray-900 '
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 '
              placeholder='Enter your address'
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
