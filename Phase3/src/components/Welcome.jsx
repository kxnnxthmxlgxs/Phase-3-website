import React from 'react';
import WelcomeImage from '../assets/images/welcome-section.jpg';

const Welcome = () => {
  return (
    <section className="bg-[#07395D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-white mb-6 p-">Welcome to Phase 3</h2>
        
        {/* Image */}
        <img
          src={WelcomeImage}
          alt="Welcome Image"
          className="mx-auto mb-6 w-3/4 md:w-1/2 h-auto rounded-full"
        />
        
        {/* Text */}
        <p className="text-white text-lg">
          Phase 3 Residence is more than just a place to stay. It is a home where champions live and thrive. We provide an environment of excellence, fostering growth, and community.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
