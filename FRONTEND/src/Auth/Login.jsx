import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:3500/users/login', {
        email,
        password,
      }, {
        withCredentials: true 
      });

      if (result.status === 200) {
        const userRole = result.data.user?.role; 
        // Redirect based on user role
        if (userRole === 'marketer') {
          navigate('/market');
        } else if (userRole === 'campaigner') {
          navigate('/camp');
        }
      }
      const loggedUser = result.data.user
      const token = result.data?.token
      localStorage.setItem("user-socialM", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        window.alert('Invalid email or password. Please try again.');
      } else {
        console.log(err);
      }
      console.error(err);
      
    }
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-3/5 shadow-lg rounded-lg">
      <div className="w-1/2 bg-white p-10 rounded-r-lg flex flex-col justify-center">
         <h2 className="text-3xl font-bold mb-6 text-btn flex justify-center text-center">
            Login
          </h2>
       

          {/* <p className="text-sm text-gray-500 mb-6">or use your email for registration</p> */}

          <form onSubmit={handleSubmit}>
           
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

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-yellow-600 transition duration-300"
            >
           Login
            </button>
          </form>
          {/* <p className="mt-6 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-yellow-500 font-semibold hover:underline">
              Login
            </Link>
          </p> */}
        </div>
        {/* Left Side */}      
          <div className="w-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white p-10 rounded-l-lg flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg mb-8"> Don't have an account? Please sign up with your personal information.</p>
          <button
            className="bg-white text-red-500 px-8 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            onClick={() => navigate('/register')}
          >
            Sign In
          </button>
        </div>

        {/* Right Side */}
      
      </div>
    </div>
  );
};

export default Login;
