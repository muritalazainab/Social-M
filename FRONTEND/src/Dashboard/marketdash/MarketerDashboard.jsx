
import React, { useState, useContext,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import { setIsLoggedInContext } from '../../App';
import PaymentForm from '../../../Stripe/PaymentForm';
import { toast } from "react-toastify";


function MarketerDashboard() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [acceptedJob, setAcceptedJob] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const setIsLoggedIn = useContext(setIsLoggedInContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);

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
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      description: "Social Media Campaign",
      budget: 500,
      timeframe: "2 weeks",
      status: "In Progress",
    },
    {
      id: 2,
      description: "Content Writing",
      budget: 300,
      timeframe: "1 week",
      status: "Pending",
    },
    {
      id: 3,
      description: "SEO Optimization",
      budget: 800,
      timeframe: "3 weeks",
      status: "Completed",
    },
  ];

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleJobAccept = (job) => {
    setAcceptedJob(job);
  };

  const handleProfileClick = () => {
    navigate("/edit-market");
  };

  const handleLogoutClick = async () => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure you want to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Logout',
        cancelButtonText: 'No, Cancel',
      });

      if (result.isConfirmed) {
        const response = await axios.post("http://localhost:3500/users/logout", { withCredentials: true });
        if (response.status === 200) {
          setIsLoggedIn(false);

          Swal.fire({
            title: 'Logged out successfully',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          navigate('/');
        }
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong while logging out.', 'error');
    }
  };

  return (
    <div className="min-h-screen ">
      <header className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
            Marketer <span className='text-indigo-600'>Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/task"
    className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
             >
              Task
            </Link>
          
            <div className="relative">
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-gray-600 text-2xl cursor-pointer hover:text-indigo-600 transition duration-300"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <Link
                    to="/edit-market"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    onClick={handleProfileClick}
                  >
                     Profile
                  </Link>
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
      <main className="container mx-auto p-10">
        <div className="bg-white rounded-lg shadow-md mb-8 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                 src="secondhm.jpg"
                alt="Profile"
                className="rounded-full w-20 h-20 object-cover border-4 border-indigo-200"
              />
              <div>
                {/* <h2 className="text-3xl font-bold text-gray-800"> Hi, {user?.fullname || "Marketer"}!
                </h2> */}
                <h2 className="text-3xl font-bold text-gray-800">
                  Welcome to your dashboard
                </h2>
              </div>
            </div>
            <div className="bg-indigo-100 p-6 rounded-xl shadow-inner flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
            <p className="text-2xl font-semibold text-indigo-800">Balance: $0.00
            </p>
            <PaymentForm isOpen={isModalOpen} setModalOpen={setModalOpen} />
          </div>
    
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Assigned Jobs</h2>
            <ul className="space-y-4">
              {jobs.map((job) => (
                <li
                  key={job.id}
                  className={`p-4 rounded-lg cursor-pointer transition duration-300 ${
                    selectedJob?.id === job.id
                      ? 'bg-indigo-100 border-2 border-indigo-300'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => handleJobSelect(job)}
                >
                  <p className="font-semibold text-gray-800">{job.description}</p>
                  <p className="text-sm text-gray-600">Budget: ${job.budget}</p>
                  <p className="text-sm text-gray-600">Timeframe: {job.timeframe}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
                    job.status === 'Completed' ? 'bg-green-200 text-green-800' :
                    job.status === 'In Progress' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-gray-200 text-gray-800'
                  }`}>
                    {job.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Job Details</h2>
            {selectedJob ? (
              <div>
                <p className="text-xl font-semibold mb-2">{selectedJob.description}</p>
                <p className="mb-1"><strong>Budget:</strong> ${selectedJob.budget}</p>
                <p className="mb-1"><strong>Timeframe:</strong> {selectedJob.timeframe}</p>
                <p className="mb-4"><strong>Status:</strong> {selectedJob.status}</p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
                  Submit Completed Work
                </button>
              </div>
            ) : (
              <p className="text-gray-600">Select a job to view details</p>
            )}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Performance</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Completed Jobs</span>
                <span className="font-semibold text-green-600">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Active Jobs</span>
                <span className="font-semibold text-blue-600">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Client Satisfaction</span>
                <span className="font-semibold text-purple-600">4.8/5</span>
              </div>
              <button className="w-full mt-4 bg-gray-100 text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MarketerDashboard;