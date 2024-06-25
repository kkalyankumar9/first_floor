import React from 'react';
import { AiTwotoneMessage } from "react-icons/ai";
const data=[
    {
        "id":1,
        "image":"https://www.almnd.in/static/media/full-stack-dev-img(new).f628e909a5be3a5095ab.png",
        "course":"Full-Stack Development Course",
        "mode":["Online", "Offline","4 Months"]
    },
    {
        "id":2,
        "image":"https://www.almnd.in/static/media/Front-end-dev-img.7e8b7b2c618b3935a302.png",
        "course":"Full-Stack Development Course",
        "mode":["Online", "Offline","4 Months"]
    },
    {
        "id":3,
        "image":"https://www.almnd.in/static/media/back-end-dev-img.b20351ed0ab8553c1352.png",
        "course":"Full-Stack Development Course",
        "mode":["Online", "Offline","4 Months"]
    },
    {
        "id":4,
        "image":"https://www.almnd.in/static/media/mobile-dev-curriculum-img.cc0d19073a1365c95430.png",
        "course":"Full-Stack Development Course",
        "mode":["Online", "Offline","4 Months"]
    }




]

const Product = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className="w-full md:w-1/2 p-4 md:p-16 text-left">
          <div className='flex items-center'>
            <AiTwotoneMessage className='text-red-500 bg-red-200 w-10 h-10 mt-4 rounded-md' />
            <p className='text-red-500 text-2xl p-4'>
              Launching Your Career for the Next Sphere
            </p>
          </div>
          <p className='text-5xl font-bold text-black p-4'>
            Redefining the Next Generation of Skill Development and Career Launch
          </p>
          <p className='text-gray-500 text-2xl p-4'>
            Experience the Education revolution with Flexible Fees, Dynamic Curriculum and transformative Experiences for Limitless Growth.
          </p>
          <button className='border bg-blue-700 text-white p-4 text-2xl rounded-md mt-4'>Enroll Now</button>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {data.map((course) => (
              <div key={course.id} className="bg-white p-4 shadow-md rounded-md text-left">
                <img src={course.image} alt="" className="w-full h-40 object-cover mb-4" />
                <p className="text-2xl font-bold mb-2">{course.course}</p>
                <div className="flex flex-wrap mb-4 w-full">
                  {course.mode.map((mode, index) => (
                    <span key={index} className="border text-blue-600 rounded-full px-3 py-1 text-lg font-semibold mr-2 mb-2">{mode}</span>
                  ))}
                </div>
                <button className="bg-red-500 w-full text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
