
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.css'; 



const Register = () => {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await axios.post("http://localhost:3500/users/register", {
        fullname,
        email,
        password,
        role,
      }, { 
        withCredentials: true // Ensure cookies are included in the request
      });
    
      Swal.fire({
        icon: 'success',
        title: 'Registered successfully!',
        showConfirmButton: false,
        timer: 1500
      });
    
      if (result.status === 201) {
        
        if (role === "marketer") {
          navigate("/market");
        } else if (role === "campaigner") {
          navigate("/camp");
        }
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error registering user',
        text: error.response?.data?.message || 'Something went wrong',
      });
    }
    
  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
   <div className="flex w-3/5 shadow-lg rounded-lg">
  
        <div className="w-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white p-10 rounded-l-lg flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg mb-8"> Already have an account? login with your personal information.</p>
          <button
            className="bg-white text-red-500 px-8 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
     
 
      <div className="w-1/2 bg-white p-10 rounded-r-lg flex flex-col justify-center">
        {/* <h2 className="text-3xl font-bold text-gray-700 mb-6">Create Account</h2> */}

      <div className="ml-20">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-6 text-btn flex justify-center text-center">
            Sign up
          </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Fullname</label>
              <input
                type="text"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}

                className=" mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                required
              />
            </div>

          

          <div className="mb-4">
            <label className="block text-sm font-medium text-txtBg">Role</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="role"
                  value="marketer"
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
                <span className="ml-2">Marketer</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="campaigner"
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
                <span className="ml-2">Campaigner</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-btn text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-border"
          >
            Sign Up
          </button>

          <p className="mt-4 text-center">
            {/* Already have an account? <Link to="/login" className="text-btn">Login</Link> */}
          </p>
        </form>
      </div>
    </div>
    </div>
    
    </div>

  );
};

export default Register;