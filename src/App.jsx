import React from "react";
import "./index.css";
import Home from './Homepage/Home'; 
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import CaseStudy from "./Homepage/CaseStudy"
import AdminDashboard from "./Dashboard/Admindasb/AdminDashboard";
import History from "./Dashboard/Admindasb/History";
import MarketerProfile from "./Dashboard/marketdash/MarketerDashboard";
import CampaignerDashboard from "./Dashboard/campdash/CampaignerDashboard";
import CreateCamp from "./Dashboard/campdash/CreateCamp";
import Task from "./Dashboard/marketdash/Task";
import View from "./Dashboard/marketdash/View";
import Apply from "./Dashboard/marketdash/Apply";
import Notify from "./Dashboard/campdash/Notify";

const App = () => {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Register/>}/>
        <Route path="/case" element={ <CaseStudy/>}/>
        <Route path="/Dash" element={ <AdminDashboard/>}/>
        <Route path="/market" element={ <MarketerProfile/>}/>
        <Route path="/camp" element={ <CampaignerDashboard/>}/>
        <Route path="/form" element={<CreateCamp />} />
        <Route path="/history" element={<History />} />
        <Route path="/task" element={<Task />} />
        <Route path="/apply" element={   <Apply />}/>
        <Route path="/view" element={   <View />}/>
        <Route path="/notify" element={   <Notify />}/>
       
     
        
      </Routes>
      </BrowserRouter>
    
   
       
       
   
    </div>
  );
};

export default App;
