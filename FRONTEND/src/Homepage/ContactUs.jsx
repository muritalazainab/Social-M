import React from 'react'
import { PiMetaLogoThin } from "react-icons/pi";
import { Link } from "react-router-dom";


const ContactUs = () => {
  return (
    <div>
    <header className="relative bg-custom-gradient  text-txtBg  shadow-md   ">
        <div className="w-full  p-2 flex justify-between items-center 	">
          <div className="logo">
            <h1 className="text-3xl font-bold pl-8 text-txtBg flex gap-1 items-center">
              <PiMetaLogoThin />
              Social M
            </h1>
          </div>
          <div className="links flex  items-center text-center ">
            <nav className="flex gap-10 mr-20">
            <Link className="text-sm" to="/">Home</Link>
        <Link className="text-sm" to="/case">Case Study</Link>
        {/* <Link className="text-sm" to="/about">About</Link> */}
        <Link className="text-sm" to="/contact">Contact</Link>
            </nav>
          </div>
            <button className="head rounded-2xl	text-center	cursor-pointer my-5	 border-2	px-10 py-px flex	border-btn 	">
              <Link to="/login">Login</Link>
            </button>
        </div>
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
