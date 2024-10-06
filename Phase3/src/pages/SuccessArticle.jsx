import React from 'react';
import { useParams } from 'react-router-dom';
import SuccessImage1 from '../assets/images/success1.png';
import SuccessImage2 from '../assets/images/successArticle2.png';
import SuccessImage3 from '../assets/images/successArticle3.png';

const SuccessArticle = () => {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      image: SuccessImage1,
      title: 'Success Stories from Our Residents',
      fullText: 'Hear the success stories of our residents...',
    },
    {
      id: 2,
      image: SuccessImage2,
      title: 'Achievements and Awards',
      fullText: 'Discover the achievements and awards of our residence...',
    },
    {
      id: 3,
      image: SuccessImage3,
      title: 'Building a Bright Future',
      fullText: 'Learn how we’re building a bright future for our residents...',
    },
  ];

  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p className="text-red-500">Article not found!</p>; // Error handling
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

export default SuccessArticle;
