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
      <div className="herosection flex pt-28 px-10  text-txtBg   justify-between	 gap-6	">
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
            className=" h-10/12 object-cover rounded-lg mb-20  ml-auto"
          />
        </div>
      </div>
      <section className=" text-txtBg p-8  bg-bg rounded-tr-[100px] relative mb-10">
  <div className="flex flex-col lg:flex-row gap-8">
    <div className="lg:w-1/2 flex flex-col justify-center text-txtBg">
      <h2 className="text-lg font-semibold">We strive to make our clients happy</h2>
      <h3 className="text-4xl font-bold mb-4">So, let's be happy together</h3>
      <p className="text-lg mb-6">
        Bridge the awareness and knowledge gap between your prospective customers and you.
        In the simplest, most creative ways possible.
      </p>
      <button className="bg-btn py-1 w-4/12 rounded-full shadow-md ">
  Meet Our Clients

</button>

    </div>

    {/* Image Section */}
    <div className="lg:w-1/2">
      <img
        src="meeting.png"
        alt="Client Working"
        className="rounded-3xl object-cover w-3/4 h-80 ml-auto"
      />
    </div>
  </div>
</section>

      {/* <section className="section pt-14 pl-8  text-txtBg w-full px-14  ">
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
      </section> */}
      <section className="services-sec pt-14 pl-8 mb-10  text-txtBg">
  <div className="section-services p-4 flex flex-col  gap-10">
    <header className="text-center">
      <h2 className="text-4xl font-bold mb-6">Our Services</h2>
      <p className="text-lg max-w-2xl mx-auto">
        Discover how we can help you achieve your marketing goals with our wide range of services designed to make your campaigns successful.
      </p>
    </header>

    <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="service-card shadow-md rounded-lg p-6 text-center">
        <img
          src="card1.jpg"
          alt="Service 1"
          className="w-24 h-24 mx-auto mb-4 object-cover rounded-full"
        />
        <h5 className="text-lg font-bold mb-2">Campaign Management</h5>
        <p className="mb-4">
          Our expert team will help you plan, execute, and manage marketing campaigns that drive results.
        </p>
        <button className="bg-btn text-white px-6 py-2 rounded-md cursor-pointer">
          Learn More
        </button>
      </div>

      <div className="service-card shadow-md rounded-lg p-6 text-center">
        <img
          src="card2.jpg"
          alt="Service 2"
          className="w-24 h-24 mx-auto mb-4 object-cover rounded-full"
        />
        <h5 className="text-lg font-bold mb-2">Content Creation</h5>
        <p className="mb-4">
          Engage your audience with high-quality content tailored to your brand and message.
        </p>
        <button className="bg-btn text-white px-6 py-2 rounded-md cursor-pointer">
          Learn More
        </button>
      </div>

      <div className="service-card shadow-md rounded-lg p-6 text-center">
        <img
          src="card 3.jpg"
          alt="Service 3"
          className="w-24 h-24 mx-auto mb-4 object-cover rounded-full"
        />
        <h5 className="text-lg font-bold mb-2">Social Media Marketing</h5>
        <p className="mb-4">
          Maximize your online presence with targeted social media campaigns that build your brand.
        </p>
        <button className="bg-btn text-white px-6 py-2 rounded-md cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>
<section className=" py-14 bg-bg px-8">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-lg text-gray-500 font-semibold">Rise to the top</h2>
          <h3 className="text-4xl font-bold text-gray-800">Increase Sales</h3>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique 
            imperdiet erat non rhoncus. Suspendisse potenti.
          </p>
        </div>
        {/* Image Content */}
        <div className="lg:w-1/2">
          <img
            src="Businessman-rafiki.png"
            alt="Office"
            className="rounded-3xl object-cover w-3/4  h-80 ml-auto"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-lg text-gray-500 font-semibold">Count on us</h2>
          <h3 className="text-4xl font-bold text-gray-800">The Experts</h3>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique 
            imperdiet erat non rhoncus. Suspendisse potenti.
          </p>
        </div>
        {/* Image Content */}
        <div className="lg:w-1/2">
          <img
            src="Coworking-bro.png"
            alt="Office Team"
            className="rounded-3xl object-cover w-3/4 h-80 ml-auto"
          />
        </div>
      </div>
    </section>



      <div className="learnmore flex pt-28 px-10 mb-10  text-txtBg  	 gap-4	">
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
  
    <footer className="bg-custom-gradient text-txtBg py-10">
      {/* Top Section with grid layout */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h5 className="text-2xl font-bold mb-4">Social Marketing</h5>
          <p className="text-base">
            Bridge the awareness and knowledge gap between your prospective
            customers and you. In the simplest, most creative ways possible.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Useful Links</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
          <ul className="space-y-2">
            <li>
              <a href="mailto:info@socialM.com" className="hover:underline">
                info@socialM.com
              </a>
            </li>
            <li>
              <p>
                +234 814 915 2164 <br />
                4B Emma Abimbola Cole Road, Eti-Osa, Lagos
              </p>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
          <ul className="flex space-x-6 text-2xl">
            <li>
              <a href="#" className="hover:text-gray-700">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
              <FaSquareXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-txtBg mt-10"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 py-6 text-center">
        <p className="text-sm">
          &copy; 2024 Social Marketing. All Rights Reserved.
        </p>
      </div>
    </footer>




      {/* <footer className=" py-8 pt-14 pl-8  px-4 bg-custom-gradient text-txtBg">
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
      </footer> */}
    </div>
  );
};

export default Home;
