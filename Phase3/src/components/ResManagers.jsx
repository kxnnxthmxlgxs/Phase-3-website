import React from 'react';
import MrTImage from '../assets/images/mrT.png';
import AsandaImage from '../assets/images/asanda.png';
import LungaImage from '../assets/images/lunga.png';

const ResManagers = () => {
  const resManagers = [
    {
      name: ' Mr Sibusiso Thwala ',
      image: MrTImage,
      message: 'As your resident manager, I am here to ensure that your experience is nothing short of excellence.'
    },
    {
      name: ' Ms Asanda Booi',
      image: AsandaImage,
      message: 'It’s an honor to manage such a wonderful group of champions. Let’s keep striving for excellence together.'
    },
    {
      name: ' Mr Lunga Kwekwe',
      image: LungaImage,
      message: 'I am proud to serve as your manager. Let’s continue to uphold the high standards we’ve set for ourselves.'
    }
  ];

  return (
    <section className="bg-white py-8 px-6 mt-6">
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
