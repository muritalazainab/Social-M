import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=' bg-bg  text-txtBg '>
        <header className="relative bg-bg  text-txtBg  shadow-md shadow-txt ">
  <div className="about  p-2 flex justify-between items-center  	">
    <div className="logo">
      <h1 className="text-3xl font-bold pl-8 text-txtBg flex gap-1 items-center"><PiMetaLogoThin />Social M</h1>
    </div>
     <div className="links flex  items-center text-center ">
    <nav className="flex gap-10 mr-20">
    <a className="text-sm " href="#">Home</a>
    <a className="text-sm " href="#">Case study</a>
    <a className="text-sm" href="#">About</a>
      <a className="text-sm" href="#">Contact</a>
    </nav>
    <button className='head rounded-2xl	text-center	cursor-pointer	 border-2	px-10 py-px flex	border-btn 	mr-auto	'>Login</button>
    </div> 
  </div>
</header>

<div className='learnmore flex pt-28 px-10 mb-10  text-txtBg  bg-bg justify-between	 gap-6	'>
<div className="hero-image ">
<img src='hero.jpg' alt='' className='w-full h-full object-cover rounded-lg'/>
  </div>
  <div className="hero-text w-2/4 ">
    <h1 className="text-6xl font-medium "> ABOUT US</h1>
    <p className="mt-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old..</p>
    <p className="mt-8">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
    </p>
    <p className="mt-8">Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
    </p>
    <p className="mt-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it  word in classical literature. discover source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
    </p>
  <button className='hero-btn bg-btn mt-8 rounded-2xl text-white	text-center	cursor-pointer		 px-14 py-1 '>Sign Up</button>
  </div>
  
</div>
    </div>
  )
}

export default About
