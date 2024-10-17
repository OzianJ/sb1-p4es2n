import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Research Software Solution</h1>
        <p className="text-xl mb-8">Cutting-edge educational tools and software for higher education</p>
        <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Explore Our Solutions
        </a>
      </div>
    </div>
  );
};

export default Hero;