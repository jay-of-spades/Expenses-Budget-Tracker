const Home = () => {
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>
        Welcome to Personal Finance Tracker
      </h1>
      <p className='text-lg'>
        This webapp is a work in progress. To continue, use the links on the
        sidebar.
      </p>
      <hr className='my-6' />
      <h3 className='text-2xl font-bold mb-4'>Updates</h3>
      <ul className='list-disc list-inside'>
        <li className='mb-2'>
          <span className='font-bold'>July 9, 2024: Dashboard Changes </span>
          <ul className='list-decimal list-inside'>
            <li>Added target and current income graphs</li>
            <li>Added Recent Transactions</li>
            <li>Added Total Expenses</li>
            <li>Added Remaining Budget</li>
            <li>Added Budget vs Expenses Line Graph</li>
          </ul>
        </li>
        <li className='mb-2'>
          <span className='font-bold'>July 6, 2024: </span>
          <ul className='list-decimal list-inside'>
            <li>Added Font Awesome Icons</li>
            <li>Minimalistic menu's</li>
            <li>Improved the appearance of Dashboard.</li>
            <li>Moved Graphs and Visuals inside Dashboard.</li>
          </ul>
        </li>
        <li className='mb-2'>
          <span className='font-bold'>July 5, 2024 --</span> Added the ability
          to add and edit categories.
        </li>
      </ul>
    </div>
  );
};

export default Home;
