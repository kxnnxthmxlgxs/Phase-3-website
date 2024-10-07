// src/components/Leadership.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LeadershipArticle1 from '../assets/images/leadershipArticle1.png';
import LeadershipArticle2 from '../assets/images/leadershipArticle2.png';
import LeadershipArticle3 from '../assets/images/leadershipArticle3.png';
import LeadershipArticle4 from '../assets/images/leadershipArticle4.png';

const Leadership = () => {
  const articles = [
    {
      id: 1,
      image: LeadershipArticle1,
      title: 'Our Leadership Team',
      preview: 'Meet the dedicated individuals leading our residence...',
    },
    {
      id: 2,
      image: LeadershipArticle2,
      title: 'Vision and Mission',
      preview: 'Learn about our vision and mission that drives our community...',
    },
    {
      id: 3,
      image: LeadershipArticle3,
      title: 'Leadership Initiatives',
      preview: 'Discover the initiatives taken by our leadership team...',
    },
    {
      id: 4, // Change id to 4 for uniqueness
      image: LeadershipArticle4,
      title: 'Leadership Strategies',
      preview: 'Explore the strategies implemented by our leadership...',
    },
  ];

  return (
    <section className="bg-gradient-to-l from-[#07395D] to-[#FECA1F] py-8 px-6 mt-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white shadow-md p-4 rounded-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.preview}</p>
              <Link to={`/leadership/article/${article.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
