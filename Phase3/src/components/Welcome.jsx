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
          className="mx-auto mb-6 w-3/4 md:w-1/2 h-auto rounded-b-full rounded-t-full border-4 border-[#FECA1F]"
        />
        
        {/* Text */}
        <p className="text-white text-lg">
        We’re excited to welcome you to the Phase 3 Residence! Here, we strive to create a community that’s both engaging and inspiring. Our mission is to keep you informed with thoughtful content and news that resonates with your experience at Phase 3.
        <br />
        <br />
        In this space, you’ll discover a variety of stories and updates, from important safety measures to personal achievements within our residence. Each update reflects the spirit of excellence and community that defines our culture.
        <br />
        <br />
        We invite you to explore, share your thoughts, and become an active part of our journey. Together, let’s build a community of champions and lifelong learners.
        </p>
        
       
      </div>
    </section>
  );
};

export default Welcome;