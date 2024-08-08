import React from 'react';
import { Link } from 'react-router-dom';
const campaigns = [
    {
      id: 1,
      title: 'Campaign Title 1',
      description: 'Description of the campaign 1',
      requirements: 'Requirements for campaign 1',
      budget: '$1000',
      timeframe: '1 month',
    },
    {
      id: 2,
      title: 'Campaign Title 2',
      description: 'Description of the campaign 2',
      requirements: 'Requirements for campaign 2',
      budget: '$2000',
      timeframe: '2 months',
    },
 
  ];
  

const Task = ({ onApplyNow, onViewJob }) => {
  return (
    <div className="container mx-auto p-4 bg-FFFAF6 text-564741">
    <h1 className="text-3xl font-bold mb-4">Campaigns</h1>
    <div className="bg-FFF6EF p-4 rounded-lg shadow-md mb-4">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-xl font-semibold">{campaign.title}</h2>
            <p className="text-sm text-gray-600">{campaign.description}</p>
          </div>
          <div className="flex space-x-2">
           
            
             <Link to='/view'   className="bg-btn text-white px-4 py-2 rounded-md"
              onClick={() => onViewJob(campaign)} >View job</Link>
         
             <Link to='/apply'     className="bg-btn text-white px-4 py-2 rounded-md"
              onClick={() => onApplyNow(campaign)} > Apply Now</Link>
       
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};


export default Task
