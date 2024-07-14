import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex flex-1'>
        <div className='w-80'>
          <Header />
          <Sidebar />
        </div>
        <main className='flex-1 p-4 bg-gray-800'>{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
