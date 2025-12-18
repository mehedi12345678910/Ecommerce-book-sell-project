import React from 'react';
import bookimage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#f9f9f9] to-[#e0e0e0] rounded-3xl my-8 mx-4 md:mx-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-10 md:px-20 md:py-16 gap-10">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold text-[#1a1a1a] leading-tight">
            Books to freshen up <br /> 
            <span className="text-primary italic">your bookshelf</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-lg max-w-md mx-auto md:mx-0">
            Discover your next great read from our curated collection of bestsellers and hidden gems.
          </p>
          <button className="btn btn-primary px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg text-white font-medium">
            View The List
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative group">
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition duration-500"></div>
            
            <img 
              className="relative w-[250px] md:w-[420px] rounded-2xl shadow-2xl transform transition-transform duration-500 hover:rotate-2 hover:scale-105" 
              src={bookimage} 
              alt="Bookshelf" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;