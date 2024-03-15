import React, { useState } from "react";
import "./enquiry.css";

const Enquiry = () => {
  const [isNameTyping, setIsNameTyping] = useState(false);
  const [isPhoneTyping, setIsPhoneTyping] = useState(false);
  const [isEmailTyping, setIsEmailTyping] = useState(false);

  const handleNameInputChange = () => {
    setIsNameTyping(true);
  };

  const handlePhoneInputChange = () => {
    setIsPhoneTyping(true);
  };

  const handleEmailInputChange = () => {
    setIsEmailTyping(true);
  };

  return (
    <>
      <div className="enquiry_container">
        <h1 className="mt-3 font-bold text-3xl text-left p-5">Contact Us</h1>
        <div className="" style={{ width: "95%", margin: "auto" }}>
          <div
            className="whitebox shadow-amber-50 w-[96%] m-auto text-black rounded p-6"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Left side */}
            <div style={{ width: "48%" }}>
              <form
                className="p-4 mt-2"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <div className="input-container mb-4 relative">
                  {!isNameTyping && (
                    <i className="fas fa-user absolute top-10 transform -translate-y-1 left-3 text-gray-800"></i>
                  )}
                  <h6 className="mt-3 font-bold text-left">Your Name</h6>
                  <input
                    type="text"
                    className="w-full  p-2 border rounded focus:outline-none focus:border-gray-500"
                    onChange={handleNameInputChange}
                  />
                </div>
                <div className="input-container mb-4 relative">
                  {!isPhoneTyping && (
                    <i className="fas fa-phone absolute top-10 transform -translate-y-1/2 left-3 text-gray-800"></i>
                  )}
                  <h1 className="mt-3 font-bold text-left">Phone Number</h1>
                  <input
                    type="text"
                    className="w-full mb- p-2 border rounded focus:outline-none focus:border-gray-500"
                    onChange={handlePhoneInputChange}
                  />
                </div>
                <div className="input-container mb-4 relative">
                  {!isEmailTyping && (
                    <i className="fas fa-envelope absolute top-10 transform -translate-y-1 left-3 text-gray-800"></i>
                  )}
                  <h1 className="mt-3 font-bold text-left">Email</h1>
                  <input
                    type="email"
                    className="w-full mb- p-2 border rounded focus:outline-none focus:border-gray-500"
                    onChange={handleEmailInputChange}
                  />
                </div>
              </form>
            </div>

            {/* Right side */}
            <div style={{ width: "48%" }}>
              <form
                className="p-4 mt-2"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h6 className="mt-3 font-bold text-left">Your Message</h6>
                <textarea
                  name="message"
                  placeholder="Type a Message"
                  className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-gray-500"
                  rows="8"
                ></textarea>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    className="p-2 from color4 focus:outline-none text-white bg-blue-700 shadow-2xl hover:bg-green-600 hover:text-black hover:scale-110"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
