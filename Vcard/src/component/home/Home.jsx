import React from "react";
// import Typewriter from 'react-simple-typewriter';
import Contact_Icon from "../Contact_Icon";
import AOS from "aos";
import "aos/dist/aos.css"; // You may also need to import the CSS file

AOS.init();

const Home = () => {
  return (
    <div className="text-center ">
      <img
        src="https://media.istockphoto.com/id/889968488/photo/skill-concept.jpg?s=2048x2048&w=is&k=20&c=8bbEArOvnGv3N66UyFrHpQrkLkapxNeAkXSNKOB7zMA="
        alt=""
        className="h-[200px] w-full"
      />

      <div
        className="w-[150px] h-[150px] m-auto mt-[-70px]  ml-8 bg-white p-1 relative rounded-full overflow-hidden border-2 border-white-500"
        style={{ float: "left" }}
      >
        <img
          className="w-full h-full object-cover rounded-full "
          src=" https://www.itconductor.com/hubfs/New%20Site%202022/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.png"
          alt=""
        />
      </div>

      <div data-aos="fade-right" data-aos-duration="800">
        <h1 className="mt-3 font-bold text-4xl text-black-700 hover:text-blue hover:scale-x-100">
          Jane Scott
        </h1>
        <p className="mt-2 font-bold text-xl text-gray-500 hover:text-gray-800 hover:scale-x-200">
          Est Excepturi Ipsum
        </p>
      </div>

      <Contact_Icon></Contact_Icon>
      <div data-aos="zoom-in-up" data-aos-duration="800">
        {/* <p className='mt-3 w-[85%] m-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro soluta, dolores odio eum saepe molestias. Sunt repellat quaerat sapiente facere aspernatur, enim facilis?</p> */}
      </div>
    </div>
  );
};

export default Home;
