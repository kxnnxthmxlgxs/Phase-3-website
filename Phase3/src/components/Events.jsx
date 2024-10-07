// src/components/Events.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import EventImage1 from '../assets/images/eventImage1.png';
import EventImage2 from '../assets/images/eventImage2.png';

const Events = () => {
  const events = [
    {
      id: 1,
      image: EventImage1,
      title: 'Community Gathering',
      preview: 'Join us for a community gathering to foster connections...',
    },
    {
      id: 2,
      image: EventImage2,
      title: 'Annual Fundraiser',
      preview: 'Participate in our annual fundraiser to support our initiatives...',
    },
    
  ];

  return (
    <section className=" py-8 px-6 mt-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#061C2C]">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white shadow-md p-4 rounded-lg">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700 mb-4">{event.preview}</p>
              <Link to={`/events/article/${event.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
