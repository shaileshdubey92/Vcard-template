import React from 'react';

const Appointment = () => {
  return (
    <>
      <div className="container mt-[60px]" data-aos="fade-right" data-aos-duration="800">
        <h1 className='font-bold text-3xl text-left m-5'>Business Hours</h1>
      
 
        <form action="" className="mt-4" data-aos="flip-down">
          <div className="time grid grid-cols-2 gap-3 mt-5">
            <button className='font-bold whitebox p-2 rounded-sm timebutton'>Mon: 9:00-20:00</button>
            <button className='font-bold whitebox p-2 rounded-sm timebutton'>Tue: 9:00-20:00</button>
            <button className='font-bold whitebox p-2 rounded-sm timebutton'>Wed: 9:00-20:00</button>
            <button className='font-bold whitebox p-2 rounded-sm timebutton'>Thur: 9:00-20:00</button>
            <button className='font-bold whitebox p-2 rounded-sm timebutton'>Fri: 9:00-20:00</button>
            <button className='font-bold whitebox p-2 rounded-sm timebutton'>Sat: 9:00-20:00</button>
            <div className="col-span-2 flex justify-center">
              <button className='font-bold whitebox p-2 rounded-sm timebutton'>Sun:Closed</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Appointment;
