import React, { useState, useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import Home from './home/Home';
import Service from './Service';
import Gallery from './gallery/Gallery';
import Products from './products/Products';
import Blog from './Blog/Blog';
import Contact_Icon from './Contact_Icon';
import PersonalInformation from './personal_data/Personal_information';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaymentOnline from './Payment/PaymentOnline';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Appointment from './Appointment';
import Enquiry from './enquiry/Enquiry';

// import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  useEffect(() => {
    // Initialize smooth-scroll when the component mounts
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
    });

    // Clean up the smooth-scroll instance when the component unmounts
    return () => {
      scroll.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(true);
  };

  return (
    <div>
    <nav className={`navbar ${isNavOpen ? 'open' : ''} pt-[50%]`} >
        <ul>
          <li className= 'bg-black p-3'><a href="#Home" onClick={closeNav}>home</a></li>
          <li className='bg-black mt-2'><a href="#Contact" onClick={closeNav}>Contact</a></li>
          <li className='bg-black mt-2'><a href="#Gallery" onClick={closeNav}>Gallery</a></li>
          <li className='bg-black mt-2'><a href="#Blog" onClick={closeNav}>Blog</a></li>
          <li className='bg-black mt-3'><a href="#Appointment" onClick={closeNav}>Appointment</a></li>
          <li className='bg-black mt-2'><a href="#Enquiry" onClick={closeNav}>Enquiry</a></li>
        </ul>
      </nav>



      {/* Main content */}
      <div className='container w-full sm:w-[40%] h-[400px] sm:m-auto '>
        {/* Button to toggle navigation */}
        {/* <button onClick={toggleNav} className="nav-toggle-button navbarbutton font-bold">
      <FontAwesomeIcon icon={isNavOpen ? faAngleRight:faAngleLeft  } />
    </button> */}

      {/* Navigation bar */}
      


      <div className="con1 ">


      <div className="homepage m-0" id="home">
          <Home></Home>
        </div>
        
        <div className="personal information" id='Contact'>

          <PersonalInformation></PersonalInformation>
        </div>

        <div className='Service p-4' id='service'>
          <Service></Service>
        </div>
        
        <div className="Testimonial"  id='Blog'>
          <Blog></Blog>
       </div>

        <div className="gallery"  id='Gallery'>
          <Gallery></Gallery>
        </div>

        <div className="Payment"  id='Enquiry'>
          <PaymentOnline></PaymentOnline>
        </div>

        <div className="appointment p-2"  id='Appointment'>
        <Appointment></Appointment>
        </div>

        <div className="Contact Us"  id='Enquiry'>
          <Enquiry></Enquiry>
        </div>
        
      </div>

        
       



      </div>
    </div>
  );
};

export default Navbar;
