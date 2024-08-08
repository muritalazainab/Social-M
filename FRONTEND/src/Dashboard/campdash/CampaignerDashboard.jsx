import React, { useState, Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
import { useNavigate, Link } from 'react-router-dom';

const CampaignerDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState(1500); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateCampaign = (e) => {
    e.preventDefault();
  
    closeModal();
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };


  const handleMenuClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="bg-bg min-h-screen ">
      <header className="bg-white text-txtBg p-6 pl-6 flex justify-between items-center shadow-txt">
        <div className="text-3xl font-semibold">Campaigner <span className='text-btn'> Dashboard </span></div>
        <div className="space-x-4 flex items-center">
        <button
        onClick={handleClick}
        className="bg-btn  text-txtBg px-4 py-2 rounded"
      >
       Create Campaigner
      </button>
      <Link to='/case' className="bg-btn  text-txtBg px-4 py-2 rounded" >Case Studies</Link>
      <div class="relative cursor-pointer">
                  <span class="absolute left-0 top-0 bg-red-500 text-white rounded-full text-xs px-1">
                    3
                  </span>
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.155 15H17v-2a2.006 2.006 0 00-.268-1.003L15 11.072V7a5.992 5.992 0 00-5-5.917V1a1 1 0 00-2 0v.083A5.992 5.992 0 003 7v4.072l-1.732 1.925A2.006 2.006 0 001 15v2h1.155a2.032 2.032 0 01-1.44 1.595L3 17h5m2 4a1 1 0 002 0m-6 0h8"
                    ></path>
                  </svg>
                </div>
         
         
        
            <div className="relative inline-block text-left">
      <div>
        
        <button
          type="button"
          className="   rounded-md border  shadow-sm  "
          onClick={toggleDropdown}
        >
        
          <svg
            className="  h-5 justify-center w-5 text-2xl  font-semibold "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"  onClick={() => handleMenuClick('/profile')}>EditProfile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Withdraw</a>
            {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Notifications</a> */}
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Payment History</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Wallet</a>
          </div>
        </div>
      )}
    </div>
         
        </div>
      </header>
      
      <main className="p-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex w-11/12 ">
          <div className="flex items-center mb-auto">
            <img src="secondhm.jpg" alt="Profile" className="rounded-full w-20 h-20 mr-4" />
            <div>
              <h2 className="text-3xl font-semibold">Hi, Campaigner!</h2>
              <p className="text-txtBg mt-3  text-xl">Welcome to your dashboard </p>
            </div>
          </div>
          <div class=" p-5 rounded shadow   ml-auto shadow-color 		">
                    {/* <h2 class="text-2xl font-semibold mb-2 ">Generate Wallet</h2> */}
                    <p className='text-2xl font-semibold '> Balance: ${walletBalance.toFixed(2)}</p>
                    <button className='bg-btn mt-4 rounded-sm	 text-white p-2'>Add fund </button>
                </div>
        </div>

        
          <h3 className="text-3xl font-semibold mb-4">Work Progress</h3>
        <div className="bg-white p-2 rounded-lg shadow-md mb-8 w-11/12">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Campaign</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Budget</th>
                <th className="py-2 px-4 border-b">Timeframe</th>
                {/* <th className="py-2 px-4 border-b">Actions</th> */}
              </tr>
            </thead>
            <tbody class="align-middle">
  <tr class="text-center">
    <td class="py-2 px-4 border-b">Campaign 1</td>
    <td class="py-2 px-4 border-b">Ongoing</td>
    <td class="py-2 px-4 border-b">$500</td>
    <td class="py-2 px-4 border-b">
    2weeks
    </td>
   
  </tr>
  <tr class="text-center">
    <td class="py-2 px-4 border-b">Campaign 1</td>
    <td class="py-2 px-4 border-b">Ongoing</td>
    <td class="py-2 px-4 border-b">$500</td>
    <td class="py-2 px-4 border-b">
    2weeks
    </td>
   
  </tr>
  <tr class="text-center">
    <td class="py-2 px-4 border-b">Campaign 1</td>
    <td class="py-2 px-4 border-b">Ongoing</td>
    <td class="py-2 px-4 border-b">$500</td>
    <td class="py-2 px-4 border-b">
    2weeks
    </td>
   
  </tr>

</tbody>

          </table>
        </div>

      
      </main>

  
    </div>
  );
};

export default CampaignerDashboard;
