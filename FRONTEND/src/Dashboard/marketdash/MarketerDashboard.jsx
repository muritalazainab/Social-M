import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // Import SweetAlert2
import axios from 'axios';
import { setIsLoggedInContext } from '../../App';

function MarketerDashboard() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [acceptedJob, setAcceptedJob] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const setIsLoggedIn = useContext(setIsLoggedInContext);
  const navigate = useNavigate(); // Use useNavigate instead of history

  const jobs = [
    {
      id: 1,
      description: "Job 1",
      budget: 500,
      timeframe: "2 weeks",
      status: "Accepted",
    },
    {
      id: 2,
      description: "Job 2",
      budget: 300,
      timeframe: "1 week",
      status: "Accepted",
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
    <div>
      <header className="bg-bg py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-semibold">
          Marketer <span className="text-btn"> Dashboard </span>
        </h1>
        <div className="flex items-center gap-4">
          <Link
            to="/task"
            className="bg-btn text-txtBg py-1 px-6 rounded focus:outline-none shadow-lg"
          >
            Task
          </Link>
          <div className="relative">
            <span className="absolute left-0 top-0 bg-red-500 text-white rounded-full text-xs px-1">
              3
            </span>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.155 15H17v-2a2.006 2.006 0 00-.268-1.003L15 11.072V7a5.992 5.992 0 00-5-5.917V1a1 1 0 00-2 0v.083A5.992 5.992 0 003 7v4.072l-1.732 1.925A2.006 2.006 0 001 15v2h1.155a2.032 2.032 0 01-1.44 1.595L3 17h5m2 4a1 1 0 002 0m-6 0h8"
              ></path>
            </svg>
          </div>
          <div className="relative mr-4">
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-txtBg text-2xl cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded shadow-lg">
                <Link to='/edit-market'   
                    href="#"
                    className="block px-4 py-2 text-txtBg hover:bg-txtBg hover:text-white"
                    onClick={handleProfileClick}
                  >
                  Edit Profile
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-2 text-txtBg hover:bg-txtBg hover:text-white"
                    onClick={handleLogoutClick}
                  >
                 Logout
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-txtBg hover:bg-txtBg hover:text-white"
                  >
                    Payment History
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-txtBg hover:bg-txtBg hover:text-white"
                  >
                    Withdrawal
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="p-8">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex">
            <div className="flex items-center mb-auto">
              <img
                src="secondhm.jpg"
                alt="Profile"
                className="rounded-full w-20 h-20 mr-4"
              />
              <div>
                <h2 className="text-3xl font-semibold">Hi, Marketer!</h2>
                <p className="text-txtBg mt-3 text-xl">
                  Welcome to your dashboard
                </p>
              </div>
            </div>
            <div className="p-5 rounded shadow ml-auto shadow-color">
              <p className="text-2xl font-semibold ">Balance: $0.0</p>
              <button className="bg-btn mt-4 rounded-sm text-white p-2">
                Add fund
              </button>
            </div>
          </div>
        </main>
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="assigned-jobs p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Assigned Jobs</h2>
            <ul className="space-y-2">
              {jobs.map((job) => (
                <li
                  key={job.id}
                  className="p-2 border rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleJobSelect(job)}
                >
                  <p>
                    <strong>Description:</strong> {job.description}
                  </p>
                  <p>
                    <strong>Budget:</strong> ${job.budget}
                  </p>
                  <p>
                    <strong>Timeframe:</strong> {job.timeframe}
                  </p>
                  <p>
                    <strong>Status:</strong> {job.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {selectedJob && (
            <div className="job-details p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Job Details</h2>
              <p>
                <strong>Description:</strong> {selectedJob.description}
              </p>
              <p>
                <strong>Budget:</strong> ${selectedJob.budget}
              </p>
              <p>
                <strong>Timeframe:</strong> {selectedJob.timeframe}
              </p>
              <p>
                <strong>Status:</strong> {selectedJob.status}
              </p>
            </div>
          )}
          <div className="submit-work p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Submit Work</h2>
            <button className="px-4 py-2 bg-btn text-white rounded hover:bg-green-600">
              Submit Completed Work
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default MarketerDashboard;
