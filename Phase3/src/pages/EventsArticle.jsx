// src/pages/EventArticle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import EventImage1 from '../assets/images/eventImage1.png';
import EventImage2 from '../assets/images/eventImage2.png';

const EventsArticle = () => {
  const { id } = useParams();

  const events = [
    {
      id: 1,
      image: EventImage1,
      title: 'Community Gathering',
      fullText: 'Join us for a community gathering to foster connections and engagement among residents and staff...',
    },
    {
      id: 2,
      image: EventImage2,
      title: 'Annual Fundraiser',
      fullText: 'Participate in our annual fundraiser to support our initiatives and projects aimed at enhancing our community...',
    },
    
  ];

  const event = events.find((e) => e.id === parseInt(id));

  return (
    <section className="bg-white py-8 px-6 mt-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">{event.title}</h2>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-800 leading-relaxed">{event.fullText}</p>
      </div>
    </section>
  );
};

export default EventsArticle;
