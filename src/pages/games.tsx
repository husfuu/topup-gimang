import CardGame from '@/components/molecules/Card';
import Navbar from '@/components/organisms/Navbar';

const Game = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto mt-9'>
        <div className='flex justify-center '>
          <div className='grid grid-cols-1 gap-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            <CardGame />
            <CardGame />
            <CardGame />
            <CardGame />
            <CardGame />
            <CardGame />
            <CardGame />
            <CardGame />
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
