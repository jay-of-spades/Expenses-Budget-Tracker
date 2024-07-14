import image from '/PFTLogo.svg';
const Home = () => {
  return (
    <div className='p-4'>
      <div className='flex gap-6 items-center mb-10 p-8 bg-gray-800 shadow-inner shadow-gray-900 w-11/12'>
        <img src={image} alt='Personal Finance Tracker' className='w-24' />
        <div class='wrapper'>
          <div class='bg text-4xl font-bold mb-4'>
            {' '}
            Personal Finance Tracker{' '}
          </div>
          <div class='fg text-4xl font-bold mb-4'>
            {' '}
            Personal Finance Tracker{' '}
          </div>
        </div>
      </div>
      <p className='text-2xl font-bold text-gray-50 mt-28'>
        **This webapp is a work in progress. On production, this home page will
        be archived. To continue, use the links on the sidebar.**
      </p>
      <hr className='my-6' />
      <h3 className='text-4xl font-bold mb-4 text-gray-50'>Updates</h3>
      <ul className='list-disc list-inside text-gray-50'>
        <li className='mb-8'>
          <span className='font-bold'>July 11, 2024: Settings & Styling</span>
          <ul className='list-decimal list-inside ml-4'>
            <li>Implemented new styling, & added logo.</li>
            <li>Added Settings Page</li>
            <ul className='list-disc list-inside ml-4'>
              <li>Added ability to change currency</li>
              <li>Added ability to change language</li>
              <li>Added ability to manage categories</li>
              <ul className='list-disc list-inside ml-8'>
                <li>Categories are now part of Settings</li>
                <li>Added ability to add, edit, and delete categories</li>
                <li>
                  Linked the categories to Budget and Expenses tab, so it is
                  dynamically updated.
                </li>
                <li>
                  Users can also get to Categories modal from inside Budget or
                  Expenses via a button
                </li>
              </ul>
              <li>Added profile and password management</li>
            </ul>
          </ul>
        </li>
        <li className='mb-8'>
          <span className='font-bold'>July 9, 2024: Dashboard Changes </span>
          <ul className='list-decimal list-inside ml-4'>
            <li>Added target and current income graphs</li>
            <li>Added Recent Transactions</li>
            <li>Added Total Expenses</li>
            <li>Added Remaining Budget</li>
            <li>Added Budget vs Expenses Line Graph</li>
          </ul>
        </li>
        <li className='mb-8'>
          <span className='font-bold'>July 6, 2024: </span>
          <ul className='list-decimal list-inside ml-4'>
            <li>Added Font Awesome Icons</li>
            <li>Minimalistic menu's</li>
            <li>Improved the appearance of Dashboard.</li>
            <li>Moved Graphs and Visuals inside Dashboard.</li>
          </ul>
        </li>
        <li className='mb-8'>
          <span className='font-bold'>July 5, 2024 --</span> Added the ability
          to add and edit categories.
        </li>
      </ul>
    </div>
  );
};

export default Home;
