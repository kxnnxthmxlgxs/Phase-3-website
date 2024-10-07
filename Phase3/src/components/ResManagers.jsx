import React from 'react';
import MrTImage from '../assets/images/mrT.png';
import AsandaImage from '../assets/images/asanda.png';
import LungaImage from '../assets/images/lunga.png';

const ResManagers = () => {
  const resManagers = [
    {
      name: ' Mr Sibusiso Thwala ',
      image: MrTImage,
      message: 'Let a hundred flowers blossom, let a hundred schools of thought contend -Moa Tse Tung. Phase 3 Residence is ideally situated adjacent to the entrance of the North Campus, bordered by the Humewood Golf Club and just a stone`s throw away from Hobie Beach. Officially opened on March 15, 2024, by the Honourable Minister of Higher Education and Training, Prof. Blade Nzimande, Phase 3 Residence, dubbed the "House of Champions, Home of Excellence," serves as a home away from home for our students. It has established itself as a hub where the leaders of tomorrow are nurtured. At Phase 3 Residence, we strive to create a conducive environment for our students to excel academically, providing developmental programs, fostering participation in extracurricular activities, and offering mentorship. This newsletter will highlight the various activities, achievements, and programs within our residence, fostering a sense of community and pride among our students.'
    },
    {
      name: ' Ms Asanda Booi',
      image: AsandaImage,
      message: 'I am thrilled to be part of this great initiative and to contribute to the very first Phase 3 Residence newsletter, aimed at keeping students informed and engaged with all that is happening within our residence and university community. From upcoming events and activities to tips for making the most of your residence experience, this newsletter is designed for you. Living in university residences offers a unique opportunity not only to study and grow academically but also to form lasting friendships and memories. Our goal here at Phase 3 Residence is to provide you with a supportive and inclusive environment where you can thrive both personally and academically. We encourage you to take some time to read through the newsletter for inspiration and to take advantage of the opportunities available within our residence. Getting involved not only enriches your experience but also broadens your perspective. Thank you for being part of our vibrant residence community. Here`s to many more newsletters to come!'
    },
    {
      name: ' Mr Lunga Kwekwe',
      image: LungaImage,
      message: 'A residence serves as a home away from home, aiming to develop students holistically as they pursue their qualifications. The activities and programs offered in residences are designed to extend learning beyond the classroom, fostering curiosity, creativity, and critical thinking. We strive to create a strong sense of sisterhood, brotherhood, and healthy relationships among students from diverse backgrounds by embracing their differences and respecting one another. Our goal is to nurture socially aware students who will make a positive impact in the broader community, driven by one of the university`s core values: uBuntu. We encourage students to balance their academics with social life, particularly within the residences, and to leave a positive social footprint. Platforms like this newsletter showcase the skills and talents of our students, highlighting their achievements and contributions.'
    }
  ];

  return (
    <section className="bg-white py-8 px-10 mt-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Resident Managers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resManagers.map((manager, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={manager.image}
                alt={manager.name}
                className="rounded-full w-32 h-32 mb-4 object-contain border-2 border-[#07395D]"
              />
              <h3 className="text-lg font-semibold">{manager.name}</h3>
              <p className="text-sm mt-2">{manager.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResManagers;
