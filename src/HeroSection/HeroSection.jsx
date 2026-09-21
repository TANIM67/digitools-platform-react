import React from 'react';
import banner from '../assets/banner.png';

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-100 px-6 lg:px-24">
      <div className="hero-content flex-col lg:flex-row gap-12 max-w-7xl mx-auto w-full justify-between">
        
        <div className="left-side flex flex-col items-start text-left max-w-xl">
          <div className="note-point flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-800 leading-tight mb-6">
            Supercharge Your <br /> Digital Workflow
          </h1>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.<br></br>
            Explore Products
          </p>

          <div className="buttons flex flex-wrap gap-4">
            <button className="btn bg-purple-600 hover:bg-purple-700 border-none text-white rounded-full px-8 normal-case">
              Explore Products
            </button>
            <button className="btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 hover:text-purple-700 rounded-full px-8 normal-case gap-2">
              <i class="fa-solid fa-play"></i>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="right-side w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative max-w-md w-full  rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img 
              src={banner} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
