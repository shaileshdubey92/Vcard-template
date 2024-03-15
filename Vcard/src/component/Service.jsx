import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode, faMobileAlt, faPalette, faBullhorn } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <>
      <div className="heading" data-aos="zoom-in">
        <h1 className="mt-16 ml-4 mb-4 font-bold text-3xl text-left  ">Our Services</h1>
      </div>

      {/* Service Card 1 */}
      <div
        className="whitebox service-card flex items-center bg-white rounded-lg shadow-md p-6 mb-4"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon icon={faCode} className="whitebox text-red-300 text-2xl" />
        <div className="service-info">
          <h2 className="font-bold text-2xl p-4 mb-2">Web Development</h2>
          <p className="text-gray-700 font-bold ">Web Development</p>
        </div>
      </div>

      {/* Service Card 2 */}
      <div
        className="service-card flex items-center bg-white rounded-lg shadow-md p-6 mb-4"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon icon={faMobileAlt} className= "whitebox text-red-300 text-2xl" />
        <div className="service-info">
          <h2 className="font-bold text-2xl p-4 mb-2">Android Development</h2>
          <p className="text-gray-700 font-bold">Android Development</p>
        </div>
      </div>

      {/* Service Card 3 */}
      <div
        className="service-card flex items-center bg-white rounded-lg shadow-md p-6 mb-4"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon icon={faPalette} className="whitebox text-red-300 text-2xl" />
        <div className="service-info">
          <h2 className="font-bold text-2xl p-4 mb-2">Web Designing</h2>
          <p className="text-gray-700 font-bold">Web Designing</p>
        </div>
      </div>

      {/* Service Card 4 */}
      <div
        className="service-card flex items-center bg-white rounded-lg shadow-md p-6 mb-4"
        data-aos="zoom-in"
      >
        <FontAwesomeIcon icon={faBullhorn} className="whitebox text-red-300 text-2xl" />
        <div className="service-info">
          <h2 className="font-bold text-2xl p-4 mb-2">Digital Marketing</h2>
          <p className="text-gray-700 font-bold">Digital Marketing</p>
        </div>
      </div>
    </>
  );
};

export default Service;
