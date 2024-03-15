import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contact_Icon = () => {
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp functionality
    // For example, you can use a library like 'react-chat-widget' or 'react-whatsapp-widget'
    alert("Opening WhatsApp");
  };

  const openMail = () => {
    // Replace with your actual mail functionality
    window.location.href = "mailto:janescott@gmail.com";
  };

  const openFacebook = () => {
    // Replace 'your_facebook_username' with your actual Facebook username
    const facebookLink = "https://www.facebook.com/isoftzone/";
    window.open(facebookLink, "_blank");
  };

  const openInstagram = () => {
    // Replace 'your_facebook_username' with your actual Facebook username
    const instagramLink = "https://www.instagram.com/isoftzone/";
    window.open(instagramLink, "_blank");
  };

  const openLinkedin = () => {
    // Replace 'your_instagram_username' with your actual Instagram username
    const Linkedin =
      "https://www.linkedin.com/company/i-softzone/?originalSubdomain=in";
    window.open(Linkedin, "_blank");
  };

  const openTwitter = () => {
    // Replace 'your_twitter_username' with your actual Twitter username
    const twitterLink = "https://twitter.com/isoftzone?lang=en";
    window.open(twitterLink, "_blank");
  };

  const openPinterest = () => {
    // Replace 'your_twitter_username' with your actual Twitter username
    const pinterestLink = "https://pinterest.com/isoftzone?lang=en";
    window.open(pinterestLink, "_blank");
  };

  const openYoutube = () => {
    // Replace 'your_twitter_username' with your actual Twitter username
    const youtubeLink = "https://youtube.com/isoftzone?lang=en";
    window.open(youtubeLink, "_blank");
  };

  return (
    <div className="whitebox flex flex-col items-center justify-center  rounded-lg w-full max-w-[70%] mx-auto mt-8 space-y-6">
      <div className="flex items-center justify-center space-x-10">
        <div className="text-green-700 text-center  " onClick={openWhatsApp}>
          <FontAwesomeIcon icon={faWhatsapp} className="text-4xl" />
        </div>
        <div className="text-blue-700 text-center " onClick={openFacebook}>
          <FontAwesomeIcon icon={faFacebook} className="text-4xl" />
        </div>
        <div className="text-red-700 text-center " onClick={openMail}>
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
        </div>
        <div className="text-pink-700 text-center " onClick={openInstagram}>
          <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10">
        <div className="text-blue-700 text-center " onClick={openLinkedin}>
          <FontAwesomeIcon icon={faLinkedin} className="text-4xl" /> 
        </div>
        <div className="text-yellow-700 text-center " onClick={openTwitter}>
          <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
        </div>
        <div className="text-red-500 text-center" onClick={openYoutube}>
          <FontAwesomeIcon icon={faYoutube} className="text-4xl" />
        </div>
        <div className="text-yellow-500 text-center" onClick={openPinterest}>
          <FontAwesomeIcon icon={faPinterest} className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Contact_Icon;
