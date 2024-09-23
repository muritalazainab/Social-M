import React, { useState } from 'react';
import CreateCamp from './CreateCamp';
import Task from "../marketdash/Task";

const CampMan = () => {
  const [campaigns, setCampaigns] = useState([]);

  const addCampaign = (newCampaign) => {
    setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
  };

  return (
    <div>
      <CreateCamp addCampaign={addCampaign} /> {/* Pass the function as a prop */}
      <Task campaigns={campaigns} />
    </div>
  );
};


export default CampMan;
