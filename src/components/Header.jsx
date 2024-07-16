import kieffenneIMG from '../assets/kieffenne_einderhawk.png';
const Header = () => {
  return (
    <header className='fixedHeader w-28 h-28 p-6 flex bg-gray-900 items-center justify-center md:flex-col md:justify-start  md:p-7 md:h-1/4 md:w-80 md:bg-gray-800 text-white'>
      <img
        src={kieffenneIMG}
        alt='image of a man, smiling'
        className='w-full h-full object-cover mb-2 block rounded-full shadow-xl md:object-fill md:w-24 md:h-24'
      />
      <h1 id='account-name' className='hidden md:block text-lg font-bold'>
        @kieffenne_einderhawk
      </h1>
    </header>
  );
};

export default Header;
