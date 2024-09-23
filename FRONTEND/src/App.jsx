import React, { createContext, useEffect, useState } from "react";
import "./index.css";
import axios from "axios"
import {  Navigate, Route, Routes } from 'react-router-dom';
import Home from './Homepage/Home'; 
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import CaseStudy from "./Homepage/CaseStudy";
import AdminDashboard from "./Dashboard/Admindasb/AdminDashboard";
import History from "./Dashboard/Admindasb/History";
import MarketerProfile from "./Dashboard/marketdash/MarketerDashboard";
import CampaignerDashboard from "./Dashboard/campdash/CampaignerDashboard";
import CreateCamp from "./Dashboard/campdash/CreateCamp";
import Task from "./Dashboard/marketdash/Task";
import View from "./Dashboard/marketdash/View";
import Apply from "./Dashboard/marketdash/Apply";
import Notify from "./Dashboard/campdash/Notify";
import EditMarketer from "./Dashboard/marketdash/EditMarket";
import Profile from "./Dashboard/Admindasb/Profile";
import StripeWrapper from "../Stripe/StripeWrapper"
import PaymentResult from "../Stripe/PaymentResult";
import ContactUs from "./Homepage/ContactUs";
import { CampaignProvider } from "./Dashboard/campdash/CampaignContext";


export const isLoggedInContext = createContext();
export const setIsLoggedInContext = createContext();

const App = () => {
  // const [clientSecret, setClientSecret] = useState('');

  
  
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    axios.get("http://localhost:3500/users", { withCredentials: true })
      .then(response => {
        if (response.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <div>
      <CampaignProvider>
      <isLoggedInContext.Provider value={isLoggedIn}>
        <setIsLoggedInContext.Provider value={setIsLoggedIn}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={isLoggedIn ? <Navigate to="/dash" /> : <Login />} />
            <Route path="/register" element={isLoggedIn ? <Navigate to="/dash" /> : <Register />} />
            <Route path="/case" element={<CaseStudy />} />
            <Route path="/contact" element={<ContactUs/>
          }/>
            <Route path="/dash" element={<AdminDashboard />} />
            <Route path="/market" element={<MarketerProfile />} />
            <Route path="/camp" element={<CampaignerDashboard />} />
          <Route path="/form" element={<CreateCamp  />} />

            <Route path="/history" element={<History />} />
            <Route path="/task" element={<Task />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/view" element={<View />} />
            <Route path="/notify" element={<Notify />} />
            <Route path="/edit-market" element={<EditMarketer />} />
            <Route path="/profile" element={<Profile />} />
           <Route path="/wrapper" element={<StripeWrapper />} />
           <Route path="/payment-result" element={<PaymentResult />} />
          </Routes>
        </setIsLoggedInContext.Provider>
      </isLoggedInContext.Provider>
      </CampaignProvider>
    </div>
  );
};

export default App;
