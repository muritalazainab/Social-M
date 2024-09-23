import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { setIsLoggedInContext } from '../../App';
import { useCampaigns } from './CampaignContext';
import StripeWrapper from '../../../Stripe/StripeWrapper';

const CampaignerDashboard = ({ user }) => {
  const { campaigns, addCampaign, setCampaigns } = useCampaigns();
  const setIsLoggedIn = useContext(setIsLoggedInContext);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0.00);
  const [fullname, setFullname] = useState(user?.fullname || 'Campaigner');
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

  // Fetch balance on component mount
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:3500/campaigns'); // Call your backend API
        setCampaigns(response.data); // Store campaigns from the database in state
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns(); // Fetch campaigns on component mount
  }, []);

  const handleCreateCampaign = async (newCampaignData) => {
    try {
      const response = await axios.post('http://localhost:3500/campaigns', newCampaignData);
      addCampaign(response.data);
      Cookies.set('campaigns', JSON.stringify([...campaigns, response.data]), { expires: 7 }); // Update cookies
      // Add your success alert logic here
    } catch (error) {
      console.error('Error creating campaign:', error);
      // Add your error alert logic here
    }
  };

  const handleEditCampaign = (campaignId) => {
    navigate(`/edit-campaign/${campaignId}`);
  };

  const handleDeleteCampaign = async (campaignId) => {
    const result = await Swal.fire({
      title: 'Are you sure you want to delete this campaign?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3500/campaigns/${campaignId}`);
        setCampaigns(campaigns.filter(campaign => campaign.id !== campaignId));
        Swal.fire('Deleted!', 'Your campaign has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting campaign:', error);
        Swal.fire('Error', 'Could not delete the campaign.', 'error');
      }
    }
  };

  return (
    <div className="bg-bg min-h-screen">
      <header className="bg-white text-txtBg p-6 pl-6 flex justify-between items-center shadow-txt">
        <div className="text-3xl font-semibold">
          Campaigner <span className='text-btn'> Dashboard </span>
        </div>
        <div className="space-x-4 flex items-center">
          <button
            onClick={() => navigate('/form')}
            className="bg-btn text-txtBg px-4 py-2 rounded"
          >
            Create Campaign
          </button>
          <Link to='/case' className="bg-btn text-txtBg px-4 py-2 rounded">
            Case Studies
          </Link>
        </div>
      </header>

      <main className="p-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex">
          <div className="flex items-center mb-auto">
            <img src="secondhm.jpg" alt="Profile" className="rounded-full w-20 h-20 mr-4" />
            <div>
              <h2 className="text-3xl font-semibold">Hi, {fullname}!</h2>
              <p className="text-txtBg mt-3 text-xl">Welcome to your dashboard</p>
            </div>
          </div>
          <div className="p-5 rounded shadow ml-auto shadow-color">
            <p className="text-2xl font-semibold">Balance: ${balance.toFixed(2)}</p>
            {/* <button 
              onClick={() => setModalOpen(true)} 
              className="bg-btn mt-4 rounded-sm text-white p-2"
              
            >
              Add Fund */}
              
          <StripeWrapper isOpen={isModalOpen} setModalOpen={setModalOpen} />
        
          </div>
        </div>

        <h3 className="text-3xl font-semibold mb-4">Work Progress</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Campaign</th>
                <th className="py-2 px-4 border-b">Budget</th>
                <th className="py-2 px-4 border-b">Timeframe</th>
                <th className="py-2 px-4 border-b">Completion</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.length > 0 ? (
                campaigns.map((campaign) => (
                  <tr key={campaign.id}>
                    <td className="py-2 px-4 border-b">{campaign.title}</td>
                    <td className="py-2 px-4 border-b">${campaign.budget}</td>
                    <td className="py-2 px-4 border-b">{campaign.deadline}</td>
                    <td className="py-2 px-4 border-b">{campaign.status}</td>
                    <td className="py-2 px-4 border-b flex space-x-2">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleEditCampaign(campaign.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => handleDeleteCampaign(campaign.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-2 px-4 border-b text-center">No campaigns available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal for g funds */}
        
        
      </main>
    </div>
  );
};

export default CampaignerDashboard;




// Marketer's Name/Username – Helps the campaigner identify the marketer.
// Marketer's Profile Picture (Optional) – Adds a visual element for easier identification.
// Marketer's Portfolio Link – Campaigners can click to view more details about the marketer’s previous work and skills.
// Application Message – The short message or cover letter from the marketer.
// Time of Application – The date/time when the marketer applied.
// Action Buttons – Buttons for the campaigner to either accept or reject the application.
