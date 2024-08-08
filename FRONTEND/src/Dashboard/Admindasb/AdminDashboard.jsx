import React, { useState } from "react";
import Profile from "./Profile";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useUser } from './UserContext';

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([
    {
      description: "Job Description 1",
      budget: 500,
      timeframe: "2 weeks",
      status: "Pending",
    },
  ]);

  const handleAcceptJob = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = "Accepted";
    setJobs(updatedJobs);
  };

  const handleDeclineJob = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = "Declined";
    setJobs(updatedJobs);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const { user } = useUser();

  // if (!user) {
  //   return <div>Please sign up or log in</div>;
  // }

  return (
    <div className="bg">
      <body class=" font-sans leading-normal bg-">
        <div class="flex flex-col md:flex-row">
          <aside class="w-full md:w-64  text-white h-screen bg-white">
            <div class="p-6">
              <h1 class="text-3xl font-semibold mb-6 text-txtBg border-b border-border p-4">
                Social Marketing
              </h1>
              <ul>
                <li class="mb-4">
                  <a
                    href="#"
                    class="block text-2xl font-semibold py-2 px-4 rounded text-txtBg hover:bg-color active:bg-color focus:outline-none focus:ring focus:ring-color"
                  >
                    <Link to="/dacash">Dashboard</Link>
                  </a>
                </li>
                <li class="mb-4">

                <Link to='/camp' class="block  font py-2 px-4 rounded text-txtBg hover:bg-color active:bg-color focus:outline-none focus:ring focus:ring-color"> Campaign Management</Link>
                
                </li>
                <li class="mb-4">
                  <Link to='/market' class="block  font py-2 px-4 rounded text-txtBg hover:bg-color active:bg-color focus:outline-none focus:ring focus:ring-color"
                  >   Marketer Management</Link>
                
                </li>
                <li class="mb-4">
                <Link to='/history' className=" block  font py-2 px-4 rounded text-txtBg hover:bg-color active:bg-color focus:outline-none focus:ring focus:ring-color">  Payment History</Link>
                </li>
              </ul>
            </div>
            <div class="p-6 mb-20">
              <h1 class="text-2xl font-semibold mb-6 text-txtBg  p-4">
                Settings
              </h1>
              <ul>
                <div className="mb-4">
                  <button
                    onClick={openModal}
                    className="block  font py-2 px-4 rounded text-txtBg hover:bg-color active:bg-color focus:outline-none focus:ring"
                  >
                    Edit Profile
                  </button>
                  <Profile isOpen={isModalOpen} onClose={closeModal} />
                </div>
                <li class="mb-4">
                  <a
                    href="#"
                    class="block  font py-2 px-4 rounded text-txtBg hover:bg-color active:bg-color focus:outline-none focus:ring "
                  >
                    Notification
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="#"
                    class="block  font py-2 px-4 rounded text-txtBg hover:bg-color active:bg-color focus:outline-none focus:ring "
                  >
                    Wallet
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <main class="flex-1 bg- p-6 h-screen">
            <header class="flex items-center mb-6 justify-end">
              <div class="flex items-center space-x-4">
                <div class="relative">
                  <span class="absolute left-0 top-0 bg-red-500 text-white rounded-full text-xs px-1">
                    3
                  </span>
                  <svg
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.155 15H17v-2a2.006 2.006 0 00-.268-1.003L15 11.072V7a5.992 5.992 0 00-5-5.917V1a1 1 0 00-2 0v.083A5.992 5.992 0 003 7v4.072l-1.732 1.925A2.006 2.006 0 001 15v2h1.155a2.032 2.032 0 01-1.44 1.595L3 17h5m2 4a1 1 0 002 0m-6 0h8"
                    ></path>
                  </svg>
                </div>
              </div>
            </header>
            <div className=" flex bg-white p-6">
              <div class="w-20 h-20 rounded-full">
                <img
                  src="case2.jpg"
                  className="rounded-full mt-1 ml-6"
                  alt="User Image"
                />
              </div>
              <div className="flex flex-col pl-4	 mb-6 ml-6">
                <h1 class="text-3xl font-semibold">Hi, Muritala Zainab </h1>
                <p className="text-lg font-semibold mt-2">
                  Welcome to the dashboard
                </p>
              </div>

              <div class=" p-5 rounded shadow   ml-auto shadow-color">
                <h2 class="text-2xl font-semibold mb-2 ">Generate Wallet</h2>
                <p className="text-2xl font-semibold">$0.00.</p>
                <button className="bg-btn mt-4 rounded-sm	 text-white p-2">
                  Add fund
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              <div className="flex items-center p-4 rounded shadow bg-white">
                <FaRegUser className="text-4xl text-gray-700 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    Completed Project
                  </h2>
                  <p className="text-2xl">20</p>
                </div>
              </div>

              <div className="flex items-center p-4 rounded shadow bg-white">
                <FaRegUser className="text-4xl text-gray-700 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    Pending project
                  </h2>
                  <p className="text-2xl">20</p>
                </div>
              </div>
              <div className="flex items-center p-4 rounded shadow bg-white">
                <FaRegUser className="text-4xl text-gray-700 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    Rejected project
                  </h2>
                  <p className="text-2xl">0</p>
                </div>
              </div>
            </div>
            <div class="overflow-x-auto mt-20 bg-bg ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Budget
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timeframe
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y ">
                  {jobs.map((job, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {job.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${job.budget}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.timeframe}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {job.status === "Pending" ? (
                          <>
                            <button
                              onClick={() => handleAcceptJob(index)}
                              className="bg-green-500 text-white p-2 rounded mr-2"
                            >
                              Assign
                            </button>
                            <button
                              onClick={() => handleDeclineJob(index)}
                              className="bg-red-500 text-white p-2 rounded"
                            >
                              Decline
                            </button>
                          </>
                        ) : (
                          <span
                            className={
                              job.status === "Accepted"
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {job.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tbody className="bg-white divide-y ">
                  {jobs.map((job, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {job.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${job.budget}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.timeframe}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {job.status === "Pending" ? (
                          <>
                            <button
                              onClick={() => handleAcceptJob(index)}
                              className="bg-green-500 text-white p-2 rounded mr-2"
                            >
                              Assign
                            </button>
                            <button
                              onClick={() => handleDeclineJob(index)}
                              className="bg-red-500 text-white p-2 rounded"
                            >
                              Decline
                            </button>
                          </>
                        ) : (
                          <span
                            className={
                              job.status === "Accepted"
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {job.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobs.map((job, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {job.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${job.budget}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.timeframe}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {job.status === "Pending" ? (
                          <>
                            <button
                              onClick={() => handleAcceptJob(index)}
                              className="bg-green-500 text-white p-2 rounded mr-2"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleDeclineJob(index)}
                              className="bg-red-500 text-white p-2 rounded"
                            >
                              Decline
                            </button>
                          </>
                        ) : (
                          <span
                            className={
                              job.status === "Accepted"
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {job.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
};

export default AdminDashboard;
