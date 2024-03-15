import React from 'react';

const Testimonial = ({ imageSrc, comment, name }) => {
  return (
    <div className="whitebox p-8">
      <div className="testimonial flex items-start">
        <div className="mr-4">
        <img src={imageSrc} alt={name} className="rounded-full w-48 h-48" />

          <p className="mt-2 font-bold">{name}</p>
        </div>
        <div>
          <p className='font-serif text-gray-500'>{comment}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="text-left container mt-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <div className="bg-white border-2 w-full p-3 rounded-2xl shadow-xl">
      <p className='text-gray-600 text-left mb-3 text-xl font-serif'>
  "Lorem, ipsum. Aut, excepturi minus lorem!
  ipsum dolor sit wuw squ dkdd shd work"
</p>

        <div className="flex items-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_640.jpg"
            alt=""
            className="w-12 h-12 rounded-full shadow-2xl"
          />
          <p className="text-gray-800 name font-bold text-xl ml-3 mt-3 font-serif">Shailesh Dubey</p>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
