import React from "react";
import { Link } from "react-router-dom";
import { PiMetaLogoThin } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <div className="lead   text-txtBg  ">
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
              <a className="text-sm " href="#">
                Home
              </a>
              <a className="text-sm " href="#">
                Case study
              </a>
              <a className="text-sm" href="#">
                About
              </a>
              <a className="text-sm" href="#">
                Contact
              </a>
            </nav>
          </div>
            <button className="head rounded-2xl	text-center	cursor-pointer my-5	 border-2	px-10 py-px flex	border-btn 	">
              <Link to="/login">Login</Link>
            </button>
        </div>
      </header>
      <div className="herosection flex pt-14 px-10 mb-10  text-txtBg  bg-bg justify-between	 gap-6	">
        <div className="hero-text w-2/4	 ">
          <h1 className="text-5xl font-medium ">
            Get more <span className="text-btn">paying</span> customers.
          </h1>
          <p className="mt-5 xl">
            Might you need a social media campaign? Content Marketing and SEO?{" "}
            <br />
            Youtube videos and ads? We find creative ways to reach people who
            could become your customers. Book a free 15-min session so we talk
            about what <br />
            you need and how we could help make it happen ipsum is simply dummy
            of <br />
            text of the printing and typesetting industry.
          </p>
       <div className="  mt-6">
          <Link
            to="register"
            className=" bg-btn rounded-2xl text-txtBg	text-center	cursor-pointer px-8 py-1"
          >
       Get Started
          </Link>
          </div>
        </div>

        <div className="hero-image w-2/4 	">
          <img
            src="Gen Z (1).gif"
            alt=""
            className=" h-10/12 object-cover rounded-lg mb-20"
          />
        </div>
      </div>
      <section className="section pt-14 pl-8 bg-color bg mb-10  text-txtBg w-full px-14  ">
        <div className="grid-txt flex">
          <div className="sec-txt w-2/4 ">
            <h1 className="text-xl font-medium ">What we do?</h1>
            <p className=" text-2xl font-medium mt-6">
              Experts at effective content marketing lifecycles.
            </p>
            <button className="hero-btn bg-btn mt-6 rounded-2xl	text-white	text-center	cursor-pointer		 px-8 py-1 ">
              <Link to="case">Case Study</Link>
            </button>
          </div>
          <div className="col-span-1 w-3/5 flex h-3/4	 bg-white shadow-md  card rounded-lg	">
            <img
              src="card1.jpg"
              alt="Card Image"
              className="w-1/4 p-4 h-20 object-cover rounded-t-lg"
            />
            <div className="pb-6 mr-26 pl-6">
              <h3 className="text-xl font-bold   p-4 ">
                Content marketing
              </h3>
              <p className="pr-4 pl-5">
                At , we study your ideal customer profile to understand the
                best way to communicate and connect with them content we create
                is an opportunity .
              </p>
              <p className="mt-5 pl-5 ">
                Every content we create is an opportunity to create trust and
                bridge create is an opportunity ...
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex pt-8 gap-3">
          <div className="card flex bg-white shadow-md rounded-lg w-full md:w-1/2 mb-2 text-lg ">
            <img
              src="card2.jpg"
              alt="Card Image"
              className="w-1/4 p-4 h-20 object-cover rounded-t-lg"
            />
            <div className="card-content p-4">
              <h5 className="text-lg font-bold mb-2">Personal PR</h5>
              <p className="pl-1 mt-5">
                When we work towards goals, we are particular about the most
                effective way to get results with the least resources.
              </p>
              <p className="mt-5 pl-1">
                Campaigns at Hera are usually driven by research, experiments
                and ...
              </p>
            </div>
          </div>
          <div className="card2 bg-white shadow-md rounded-lg  w-full md:w-1/2 mb-2 text-lg flex">
            <img
              src="card 3.jpg"
              alt="Card Image"
              className="w-1/4 p-4 h-20 object-cover rounded-t-lg"
            />
            <div className="card-content p-4">
              <h5 className="text-lg font-bold mb-2">Social Media</h5>
              <p className="pl-1 mt-5">
                We have a track record of working with others in ways that leave
                all partners achieving much more together.
              </p>
              <p className="mt-5 pl-1">
                Hera has systems and processes to ensure SLAs and project
                management ...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="second-sec pt-14 pl-8 mb-10 bg-bg  text-txtBg">
        <div className="section-two  p-4 flex gap-8">
          <div className="card   shadow-md rounded-lg p-4  w-2/4">
            <img
              src="mrr.jpg"
              alt="Card Image"
              className="w-2/4 h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="col-span-2   grid-cols-2 w-2/4 flex flex-col gap-4  ">
            <div className="card w-11/12  shadow-md rounded-lg    gap-3 p-4 flex">
              <img
                src="hm.jpg"
                alt="Card Image"
                className="w-2/4 h-48 object-cover rounded-t-lg"
              />
              <div className="card-content  p-4">
                <h5 className="text-lg font-bold mb-2">HM community launch </h5>
                <p className=" mb-8">
                  Educating a new market segment was indeed a challenging task
                  ...
                </p>
                <button className=" bg-btn mb-8 w-8/12 rounded-md	text-center	cursor-pointer	 text-white px-6 py-2">
                  Case Study
                </button>
              </div>
            </div>
            <div className="card w-11/12 flex gap-3	   shadow-md rounded-lg p-4 ">
              <img
                src="secondhm.jpg"
                alt="Card Image"
                className="w-2/4 h-48 object-cover rounded-t-lg"
              />
              <div className="card-content p-4">
                <h5 className="text-lg font-bold mb-2">HM community launch </h5>
                <p className=" mb-8">
                  Educating a new market segment was indeed a challenging task
                  ...
                </p>
                <button className=" bg-btn mb-8 w-8/12 rounded-md text-center	cursor-pointer		 text-white px-6 py-2">
                  Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-color">
        <header className="mb-4">
          <h2 className="text-4xl font-bold text-center">Let's Talk</h2>
        </header>
        <div className="contact mx-auto p-4 pt-6 md:p-6 lg:p-12 flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <img src="Contact us.gif" class="w-full h-auto" alt="Image" />
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

      <div className="learnmore flex pt-28 px-10 mb-10  text-txtBg  bg-bg	 gap-4	">
        <div className="hero-image w-2/4 ">
          <img
            src="aboutus.png"
            alt=""
            className="  rounded-lg h-full items-center"
          />
        </div>
        <div className="hero-text w-2/4  ">
          <h1 className="text-4xl font-medium  "> ABOUT US</h1>
          <p className="mt-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old..
          </p>
          <p className="mt-8">
            Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure
          </p>
          <p className="mt-8">
            Latin words, consectetur, from a Lorem Ipsum passage, and going
            through the cites of the word in classical literature, discovered
            the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
            1.10.33
          </p>
          <p className="mt-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it word in classical literature. discover source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33
          </p>
        </div>
      </div>

      <footer className=" py-8 pt-14 pl-8  px-4 bg-custom-gradient text-txtBg">
        <div className="foooter flex justify-between gap-4">
          <div className="ml-5">
            <h5 className="text-3xl font-bold mb-2 ">Social marketing</h5>
            <p className="text-lg mb-4">
              Bridge the awareness and knowledge gap <br /> between your
              prospective customers and you. <br />
              In the simplest, most creative ways possible.
            </p>
          </div>
          <div className="p-4 mr-40">
            <div className="xl:w-1/4 p-4">
              <h5 className="text-lg font-bold mb-2">Useful Links</h5>
              <ul className="list-none mb-4">
                <li>
                  <a href="#" className=" ">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="xl:w-1/4 p-4">
              <h5 className="text-lg font-bold mb-2">Contact Us</h5>
              <ul className="list-none mb-1">
                <li>
                  <a href="" className="">
                    info@socialM.com
                  </a>
                </li>
              </ul>
              <p>
                +234 814 915 2164 4B Emma Abimbola Cole <br /> Road, Eti-Osa,
                Lagos{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" xl:w-1/4 p-4 ">
          <h5 className="text-lg font-bold mb-2">Follow Us</h5>
          <ul className="list-none mb-4 text-2xl		 flex gap-4">
            <li>
              <a href="#" className=" ">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className=" ">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" className=" ">
                <FaSquareXTwitter />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center p-4 border-t-2	divide-dotted border-txtBg	">
          <p className="">
            Copyright 2024 Social marketing. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
