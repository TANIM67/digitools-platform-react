import React from 'react';

const MiddleBadge = () => {
  return (
    <div className="w-full bg-linear-to-r from-indigo-600 via-purple-600 to-fuchsia-600 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
        
        <div className="active-user flex-1 text-center md:border-r border-white/20 py-2">
          <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            50K+
          </div>
          <div className="text-white/80 text-lg font-medium">
            Active Users
          </div>
        </div>

        <div className="premium-tools flex-1 text-center md:border-r border-white/20 py-2">
          <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            200+
          </div>
          <div className="text-white/80 text-lg font-medium">
            Premium Tools
          </div>
        </div>

        <div className="Rating flex-1 text-center md:border-r border-white/20 py-2">
          <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            4.9
          </div>
          <div className="text-white/80 text-lg font-medium">
            Rating
          </div>
        </div>

      </div>
    </div>
  );
};

export default MiddleBadge;
