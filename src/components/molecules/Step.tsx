import { ReactNode } from 'react';

interface StepsProps {
  title: string;
  icon: ReactNode;
  desc: string;
}

export default function Step(props: StepsProps) {
  const { title, icon, desc } = props;

  return (
    <div className='max-w-sm rounded-lg border border-gray-200 bg-white p-5 shadow-md '>
      <div className='mb-4'>{icon}</div>

      <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-600'>
        {title}
      </h5>
      <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
        {desc}
      </p>
    </div>
  );
}
