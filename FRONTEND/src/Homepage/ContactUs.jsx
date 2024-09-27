import React from 'react'
import { PiMetaLogoThin } from "react-icons/pi";
import { Link } from "react-router-dom";


const ContactUs = () => {
  return (
    <div>
    <header className="flex justify-between items-center p-6 bg-white shadow-lg">
      <div className="logo pl-26 ">
             <h1 className="text-3xl font-bold pl-8 text-txtBg flex gap-1 items-center">
               <PiMetaLogoThin />
               Social M
             </h1>
      </div>
        <nav className="space-x-6"> <Link className="text-sm" to="/">Home</Link>         <Link className="text-sm" to="/case">Case Study</Link>
   {/* <Link className="text-sm" to="/about">About</Link> */}
        <Link className="text-sm" to="/contact">Contact</Link>
          <button className="px-4 py-2 bg-[#FFCC29] text-white rounded-md hover:bg-yellow-500">   <Link to="/login">Login</Link></button>
        </nav>
      </header>
      <div className=" mt-16">
  <header className="mb-4">
    <h2 className="text-4xl font-bold text-center">Let's Talk</h2>
  </header>
  <div className="contact mx-auto p-4 pt-6 md:p-6 lg:p-12 flex flex-wrap">
    <div className="w-full md:w-1/2 xl:w-1/2 p-4">
      <img src="Contact us.gif" className="w-full h-auto" alt="Image" />
    </div>

          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <form>
              <div className="mb-4">
                <label className="block w-full py-2 text-xl" for="name">
                  Firstname
                </label>
                <input
                  type="text"
                  id="name"
                  class=" block w-3/4 p-3 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border"
                />
              </div>
              <div className="mb-4">
                <label className="block w-full py-2 text-xl" for="name">
                  Lastname
                </label>
                <input
                  type="text"
                  id="name"
                  class=" block w-3/4 p-3 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border"
                />
              </div>
              <div className="mb-4">
                <label className="block w-full py-2 text-xl" for="name">
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  class=" block w-3/4 p-3 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border"
                />
              </div>
              <div className="mb-4">
                <label className="block w-full py-2 text-xl" for="name">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="mt-1 block w-full p-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border"
                ></textarea>
              </div>
              <button className=" bg-btn  w-4/12 rounded-md text-center	cursor-pointer		 text-white px-6 py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
