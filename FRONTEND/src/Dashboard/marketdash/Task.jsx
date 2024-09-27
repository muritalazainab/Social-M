
import{ useEffect, useState }from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, ChevronRight } from 'lucide-react';
import { useCampaigns} from '../campdash/CampaignContext';
import axios from 'axios';



const CampaignCard = ({ campaign }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{campaign.title}</h2>
      <p className="text-gray-600 mb-4">{campaign.description}</p>
      <div className="flex items-center text-gray-500 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="text-sm">{campaign.date}</span>
        <Users className="w-4 h-4 ml-4 mr-2" />
        <span className="text-sm">{campaign.participants} participants</span>
      </div>
      <div className="flex justify-between items-center">
        {/* <Link 
          to="/view" 
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
        >
          View Details
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link> */}
        <Link 
          to="/apply" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          Apply Now
        </Link>
      </div>
    </div>
  </div>
);

const Task = () => {
  const [campaigns, setCampaigns] = useState("")

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:3500/campaigns'); // Fetch campaigns
        if (response.data && Array.isArray(response.data)) {
          setCampaigns(response.data); // Set state with campaigns from backend
        }
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns(); // Fetch campaigns on page load
  }, [setCampaigns]);
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Available Campaigns
        </h1>
        {campaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Campaigns Available</h2>
            <p className="text-gray-600">Check back later for new opportunities!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;