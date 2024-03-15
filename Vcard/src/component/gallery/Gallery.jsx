import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Blog = () => {
  const images = [
    {
      original: 'https://media.istockphoto.com/id/1451456915/photo/female-freelance-developer-coding-and-programming-coding-on-two-with-screens-with-code.webp?b=1&s=612x612&w=0&k=20&c=5ZMg6EdoFKDJ-KGVhvoMD47aJFgbVkI-coiCpy7ErKY=',
      description: 'Image 1 description',
    },
    {
      original: 'https://media.istockphoto.com/id/1164357236/photo/developing-programmer-reading-computer-codes-development-website-design-and-coding.jpg?s=2048x2048&w=is&k=20&c=v6AleFCO4bKVEjlZ-kcwHVljJT3-tHJMqY1xVdK5vE0=',
      description: 'Image 2 description',
    },{
      original: 'https://cdn.pixabay.com/photo/2020/05/07/04/01/digitization-5140071_640.jpg',
      description: 'Image 3 description',
    },
    {
      original: 'https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468_1280.jpg',
      description: 'Image 4 description',
    },
    {
      original: 'https://cdn.pixabay.com/photo/2016/12/29/12/27/cyber-glasses-1938449_640.jpg',
      description: 'Image 5 description',
    },
    
  ];

  return (
    <div>
        <h1 className='font-bold text-3xl text-left m-5'>Gallery</h1>
      
 


      <Gallery items={images} />
    </div>
  );
};

export default Blog;
