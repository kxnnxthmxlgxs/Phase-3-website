import React from 'react';
import { Link } from 'react-router-dom';
import SuccessImage1 from '../assets/images/success1.png';
import SuccessArticle2 from '../assets/images/successArticle2.png';
import SuccessArticle3 from '../assets/images/successArticle3.png';

const Success = () => {
  const articles = [
    {
      id: 1,
      image: SuccessImage1,
      title: 'My own journey with cferi and running my own business',
      preview: 'Hear the success stories of our residents...',
    },
    {
      id: 2,
      image: SuccessArticle2,
      title: 'Achievements and Awards',
      preview: 'Discover the achievements and awards of our residence...',
    },
    {
      id: 3,
      image: SuccessArticle3,
      title: 'Building a Bright Future',
      preview: 'Learn how we’re building a bright future for our residents...',
    },
  ];

  return (
    <section className="bg-[#FECA1F] py-8 px-6 mt-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Success</h2>
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
              <Link to={`/success/article/${article.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
