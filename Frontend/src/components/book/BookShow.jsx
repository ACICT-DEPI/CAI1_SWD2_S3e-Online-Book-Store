import React from 'react';
import img from './books/think-and-grow-rich.jpg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
// <div className="absolute top-2 right-2 flex flex-col space-y-2
//  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
// <button className="bg-white p-2 rounded-full shadow-lg">
//   <i className="fa fa-search"></i> {/* أيقونة البحث */}
// </button>
export default function BookShow() {
  return (
    <div className='flex flex-col  h-fit cursor-pointer group
     hover:shadow-2xl hover:rounded-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out   '>
      <div className='  w-3/4 mx-auto relative group
       hover:rounded-xl  hover:shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out '>
        
      <img src={img} alt="Think and Grow Rich" className=' h-full rounded-xl  ' />
        
      <div className='absolute  top-2 right-2 bg-white flex flex-col space-y-2 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
         <button className='bg-white p-2 rounded-full shadow-lg '>
         <i className="fa fa-search"></i>
         </button>
         <button className='bg-white p-2 rounded-full shadow-lg'>
         <i className="fa fa-heart"></i>
         </button>
         </div>
         <div>
         
         </div>
      </div>

      <div className='py-4 px-2'>
        <p className='text-center'>descrbtion hare name of</p>
        <h3 className='text-center'>price</h3>
      </div>

      
      <div className='opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out pb-2 px-2 '>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full '>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
