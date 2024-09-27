import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { setIsLoggedInContext } from "../../App";
import { useCampaigns } from "./CampaignContext";
import PaymentForm from "../../../Stripe/PaymentForm";
import { toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const CampaignerDashboard = () => {  // { user }
  const { campaigns, addCampaign, setCampaigns } = useCampaigns();
  const setIsLoggedIn = useContext(setIsLoggedInContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0.0);
  const [fullname, setFullname] = useState();
  const [isModalOpen, setModalOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // console.log(user)

  useEffect(() => {
    const handleGetUser = async => {
      try {
        const storedUser = localStorage.getItem("user-socialM");
        if(storedUser) {
          const user = JSON.parse(storedUser);

          setUser(user)
        }
      } catch (error) {
        console.error(error);
        
      }
    }

    handleGetUser()
  }, [])

  // Fetch campaigns when component mounts
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:3500/campaigns"); // Fetch campaigns
        if (response.data && Array.isArray(response.data)) {
          setCampaigns(response.data); // Set state with campaigns from backend
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, [setCampaigns]);

  // Handle editing a campaign
  const handleEditCampaign = (campaignId) => {
    navigate(`/edit-campaign/${campaignId}`);
  };
  const handleDelete = async (id) => {
    // if (!id) {
    //   toast.error("Invalid ID. Cannot delete the item.");
    //   return;
    // }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this campaign?"
    );
    if (!confirmDelete) return; // Exit if user cancels

    try {
      const response = await axios.delete(
        `http://localhost:3500/campaigns/${id}`
      );

      if (response.status === 200) {
        // Display success message
        toast.success("Campaign deleted successfully!");
      } else {
        toast.error("Failed to delete the campaign.");
      }
    } catch (error) {
      console.error("Error while deleting the campaign:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  const handleLogoutClick = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure you want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Logout",
        cancelButtonText: "No, Cancel",
      });

      if (result.isConfirmed) {
        const response = await axios.post(
          "http://localhost:3500/users/logout",
          { withCredentials: true }
        );
        if (response.status === 200) {
          setIsLoggedIn(false);

          Swal.fire({
            title: "Logged out successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong while logging out.", "error");
    }
  };
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen font-sans">
      <header className="bg-white text-gray-800 p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">
            Campaigner <span className="text-indigo-600">Dashboard</span>
          </div>
          <div className="space-x-4 flex items-center">
            <button
              onClick={() => navigate("/form")}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Create Campaign
            </button>
            <Link
              to="/case"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              Case Studies
            </Link>
            <div className="relative">
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-gray-600 text-2xl cursor-pointer hover:text-indigo-600 transition duration-300"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {/* <Link
                    to="/edit-market"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    onClick={handleProfileClick}
                  >
                    Edit Profile
                  </Link> */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    Payment History
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    Withdrawal
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-xl shadow-xl mb-8 flex flex-wrap items-center">
          <div className="flex items-center mb-4 md:mb-0 flex-grow">
            <img
              src="secondhm.jpg"
              alt="Profile"
              className="rounded-full w-20 h-20 mr-6 border-4 border-indigo-200"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Hi, {user?.fullname || "Campaigner"}!
              </h2>
              <p className="text-gray-600 mt-2 text-xl">
                Welcome to your dashboard
              </p>
            </div>
          </div>
          <div className="bg-indigo-100 p-6 rounded-xl shadow-inner flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
            <p className="text-2xl font-semibold text-indigo-800">
              Balance: ${user?.balance.toFixed(2) || 0}
            </p>
            <PaymentForm isOpen={isModalOpen} setModalOpen={setModalOpen} />
          </div>
        </div>

        <h3 className="text-3xl font-bold mb-6 text-gray-800">Work Progress</h3>
        <div className="bg-white p-6 rounded-xl shadow-xl overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeframe
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completion
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.length > 0 ? (
                campaigns.map((campaign) => (
                  <React.Fragment key={campaign._id}>
                    <tr className="hover:bg-gray-50 transition duration-300 ease-in-out">
                      <td className="py-4 px-6 whitespace-nowrap">
                        {campaign.title}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        ${campaign.budget}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        {" "}
                        {new Date(campaign.deadline || null).toLocaleString()}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {campaign.status}
                        </span>
                      </td>
                      {/* <td className="py-4 px-6 whitespace-nowrap text-sm font-medium">
                        <button
                          className="text-indigo-600 hover:text-indigo-900 mr-4 transition duration-300 ease-in-out"
                          onClick={() => handleEditCampaign(campaign._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900 transition duration-300 ease-in-out"
                          onClick={() => handleDelete(campaign._id)}
                        >
                          Delete
                        </button>
                      </td> */}
                    </tr>

                    {/* List of Marketers who applied for the campaign */}
                    {campaign.applicants && campaign.applicants.length > 0 && (
                      <tr>
                        <td colSpan="5" className="py-4 px-6">
                          <h4 className="text-lg font-semibold mb-4">
                            Marketers who applied:
                          </h4>
                          <ul>
                            {campaign.applicants.map((applicant) => (
                              <li
                                key={applicant.id}
                                className="flex justify-between items-center py-2"
                              >
                                <span>
                                  {applicant.name} (Portfolio:{" "}
                                  {applicant.portfolioLink})
                                </span>
                                <div>
                                  <button
                                    className="text-green-600 hover:text-green-900 mr-4 transition duration-300 ease-in-out"
                                    onClick={() =>
                                      handleAcceptMarketer(
                                        campaign.id,
                                        applicant.id
                                      )
                                    }
                                  >
                                    Accept
                                  </button>
                                  <button
                                    className="text-red-600 hover:text-red-900 transition duration-300 ease-in-out"
                                    onClick={() =>
                                      handleDeclineMarketer(
                                        campaign.id,
                                        applicant.id
                                      )
                                    }
                                  >
                                    Decline
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 px-6 text-center text-gray-500"
                  >
                    No campaigns available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default CampaignerDashboard;
