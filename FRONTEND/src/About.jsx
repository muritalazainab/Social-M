import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=' bg-bg  text-txtBg '>
 

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
