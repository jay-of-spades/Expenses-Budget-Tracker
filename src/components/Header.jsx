import kieffenneIMG from '../assets/kieffenne_einderhawk.png';
const Header = () => {
  return (
    <header className='flex flex-col justify center items-center p-7 h-1/4 bg-blue-600 text-white'>
      <img
        src={kieffenneIMG}
        alt='image of a man, smiling'
        className='w-32 h-32 mb-2 block rounded-full shadow-xl'
      />
      <h1 id='account-name' className='text-lg font-bold'>
        @kieffenne_einderhawk
      </h1>
    </header>
  );
};

export default Header;
