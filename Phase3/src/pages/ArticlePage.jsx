import React from 'react';
import { useParams } from 'react-router-dom';
import OfficialOpening from '../assets/images/officialOpening.png';
import NewsArticle2 from '../assets/images/newsArticle2.png'; // Ensure this path is correct
import NewsArticle3 from '../assets/images/newsArticle3.png'; // Ensure this path is correct

const ArticlePage = () => {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      image: OfficialOpening,
      title: 'Official opening of PHASE 3 RESIDENCE',
      fullText: 'Here is the full article text for the first article...',
    },
    {
      id: 2,
      image: NewsArticle2,
      title: 'Meet Our New Resident Managers',
      fullText: 'Here is the full article text for the second article...',
    },
    {
      id: 3,
      image: NewsArticle3,
      title: 'Upcoming Events and Activities',
      fullText: 'Here is the full article text for the third article...',
    },
  ];

  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <section className="bg-white py-8 px-6 mt-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-red-500">Article not found</h2>
        </div>
      </section>
    );
  }

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

export default ArticlePage;
