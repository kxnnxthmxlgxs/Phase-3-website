// src/pages/LeadershipArticle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import LeadershipArticle1 from '../assets/images/leadershipArticle1.png';
import LeadershipArticle2 from '../assets/images/leadershipArticle2.png';
import LeadershipArticle3 from '../assets/images/leadershipArticle3.png';
import LeadershipArticle4 from '../assets/images/leadershipArticle4.png';

const LeadershipArticle = () => {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      image: LeadershipArticle1,
      title: 'Our Leadership Team',
      fullText: 'Here is the full article text for Our Leadership Team...',
    },
    {
      id: 2,
      image: LeadershipArticle2,
      title: 'Vision and Mission',
      fullText: 'Here is the full article text for Vision and Mission...',
    },
    {
      id: 3,
      image: LeadershipArticle3,
      title: 'Leadership Initiatives',
      fullText: 'Here is the full article text for Leadership Initiatives...',
    },
    {
      id: 4,
      image: LeadershipArticle4,
      title: 'Leadership Strategies',
      fullText: 'Here is the full article text for Leadership Strategies...',
    },
  ];

  const article = articles.find((a) => a.id === parseInt(id));

  return (
    <section className="bg-white py-8 px-6 mt-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">{article.title}</h2>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-800 leading-relaxed">{article.fullText}</p>
      </div>
    </section>
  );
};

export default LeadershipArticle;
