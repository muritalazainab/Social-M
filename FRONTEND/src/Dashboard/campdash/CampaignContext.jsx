import React, { createContext, useContext, useState, useEffect } from 'react';

const CampaignContext = createContext();

export const useCampaigns = () => {
  return useContext(CampaignContext);
};

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await fetch('http://localhost:3500/campaigns');
      const data = await response.json();
      console.log(data)
      setCampaigns(data);
    };

    fetchCampaigns();
  }, []);

  const addCampaign = (newCampaign) => {
    setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};
