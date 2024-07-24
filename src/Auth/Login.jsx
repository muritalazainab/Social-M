import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
       <div className='login bg-white  rounded-lg shadow-lg w-6/12 my--6  ml-80 justify-center items-center py-6 px-10  mt-20 '>
  
  <form action="#">
      
  <h2 class="text-3xl font-bold mb-6 text-txt justify-center flex text-center	">Login</h2>
          <p className='text-txtBg  text-xl mb-6'>Please enter your details to Login</p>
          <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-txtBg"> Email</label>
              <input type="email" id="password" name="password" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border" placeholder=" Email" required/>
          </div>
          <div class="mb-4">
              <label for="profile-picture" class="block text-sm font-medium text-txtBg">Password</label>
              
              <input type="password" id="password" name="password" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border" placeholder=" Password" required />

          </div>
          <button type="submit" class="w-full bg-btn text-white py-2 px-4 rounded-md shadow-lg mt-4 focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2">Login</button>
         <p className='mt-6 text-xl'>Not registered yet? <a href=""><span className='text-btn'> <Link to='/register'>  Register</Link> </span></a></p>

  </form>

  </div>
    </div>
  )
}

export default Login
