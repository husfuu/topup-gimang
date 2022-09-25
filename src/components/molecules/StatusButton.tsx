import cx from 'classnames';

interface StatusButtonProps {
  title: string;
  active: boolean;
  // onClick: () => void;
}

const StatusButton = (props: StatusButtonProps) => {
  // const { title, active, onClick } = props;
  const { title, active } = props;
  const btnClass = cx({
    'mr-4 rounded-full py-2 px-7 text-white hover:bg-pink-700': true,
    'bg-pink-600': active,
    'bg-pink-400': !active,
  });

  return (
    // <button className={btnClass} onClick={onClick}>
    //   {title}
    // </button>
    <button className={btnClass}>{title}</button>
  );
};

export default StatusButton;
