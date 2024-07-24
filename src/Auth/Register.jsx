import React from 'react'
import { Link } from 'react-router-dom'
import {  useCallback, useContext, useEffect, useState } from 'react';


const Register = () => {
  const [Fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description , setDescription] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  

  return (
    <div className='mx-auto p-4 pt-6   flex gap-8'>
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
    <img src="Sign up-pana (1).png" class="w-full h-auto" alt="Image"/>
  </div>

    <div class="ml-20">
          
          <form action="#">
            
          <h2 class="text-3xl font-bold mb-6 text-btn justify-center flex text-center	">Sign up</h2>
       
   
              <div class="mb-4">
                  <label for="email" class="block  font-medium  text-txtBg">Fullname</label>
                  <input type="text" id="name" name="name" class="mt-1 block  w-full p-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border"    value={Fullname}
            onChange={(e) => setName(e.target.value)}
            required placeholder="Fullname"/>
              </div>
              <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-txtBg">Email</label>
                  <input   value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border" placeholder="Your Email"/>
              </div>
              <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-txtBg">Password</label>
                  <input    value={password}
            onChange={(e) => setPassword(e.target.value)}
            required type="password" id="password" name="password" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border" placeholder="Password"/>
              </div>
          
              <div class="mb-4">
                  <label for="profile-picture" class="block text-sm font-medium text-txtBg">Profile Picture</label>
                  <input  value={profilePicture} onChange={(e) => setProfilePicture(e.target.files[0])}
            
            required type="file" id="profile-picture" name="profile-picture" class="mt-1 block w-full p-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border"/>
              </div>
         <div class="mb-4">
           <label for="marketingBudget" class="block text-sm font-medium text-txtBg">Description of your profession</label>
           <textarea   value={description}
            onChange={(e) => setDescription(e.target.value)} name="bio" id="bio" rows="3" className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-inborder focus:border-inborder sm:text-sm"></textarea>
    
              </div>
              <button type="submit" class="w-full bg-btn text-white py-2 px-4 rounded-md shadow-lg  focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2"><Link to='register'>Sign up </Link></button>
          </form>
      </div>
    </div>
  )
}

export default Register
