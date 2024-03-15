import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faEnvelope,
  faLocation,
  faMobile,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Added faUser for example

const PersonalInformation = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:janescott@gmail.com";
  };

  const handleMobileClick = () => {
    window.location.href = "mob:+915629288582";
  };

  const handleBirthdayClick = () => {
    // You can navigate to a specific page or display a modal with birthday details
    window.location.href = "/birthday-details";
  };

  const handleLocationClick = () => {
    // You can navigate to a specific page or display a modal with location details
    window.location.href = "/location-details";
  };

  return (
    <>
      <div data-aos="zoom-in-up" data-aos-duration="800">
        {/* <h1 className='font-bold text-2xl mt-5'>Contact US</h1> */}
      </div>
      {/* <hr className='bg-blue-400 mt-2 h-1 w-16 m-auto' /> */}
      <div className="bg-white-50 w-full h-[100px] mt-16">
        <div className="row flex">
          <div
            className="whitebox rounded-lg email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-blue-300"
            onClick={handleEmailClick}
            data-aos="zoom-in-down"
            data-aos-duration="800"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-3xl text-gray-500" />

            <p className="h-5 font-bold text-black">janescott@gmail.com</p>
          </div>

          <div
            className="whitebox mobile rounded-lg w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-blue-300 "
            onClick={handleMobileClick}
            data-aos="zoom-in-down"
            data-aos-duration="800"
          >
            <div>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-3xl text-gray-500" />
            </div>

            <p className="h-5 font-bold text-black">tel:+91-5629288582</p>
          </div>
        </div>

        <div className="row flex">
          <div
            className="whitebox rounded-lg date-of-birth w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-blue-300"
            onClick={handleBirthdayClick}
            data-aos="zoom-in-down"
            data-aos-duration="800"
          >
            <div>
              <FontAwesomeIcon icon={faBirthdayCake} className="mr-2 text-3xl  text-gray-500" />
            </div>

            <p className="h-5 font-bold text-black">21 Jul 1961</p>
          </div>

          <div
            className="whitebox location rounded-lg w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-blue-300"
            onClick={handleLocationClick}
            data-aos="zoom-in-down"
            data-aos-duration="800"
          >
            <div>
              <FontAwesomeIcon icon={faLocation} className="mr-2 text-3xl text-gray-500" />
            </div>

            <p className="h-5 font-bold text-center text-black">
              New York, USA
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
