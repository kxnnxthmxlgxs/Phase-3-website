import React from 'react';
import { Link } from 'react-router-dom';
import OfficialOpening from '../assets/images/officialOpening.png';
import NewsArticle2 from '../assets/images/newsArticle2.png'; // Ensure this path is correct
import NewsArticle3 from '../assets/images/newsArticle3.png'; // Ensure this path is correct

const News = () => {
  const articles = [
    {
      id: 1,
      image: OfficialOpening,
      title: 'Official opening of PHASE 3 RESIDENCE',
      preview: 'We’re thrilled to announce some exciting new projects underway...',
      fullText: 'Here is the full article text for the first article...',
    },
    {
      id: 2,
      image: NewsArticle2,
      title: 'Meet Our New Resident Managers',
      preview: 'Let’s give a warm welcome to our new resident managers...',
      fullText: 'Here is the full article text for the second article...',
    },
    {
      id: 3,
      image: NewsArticle3,
      title: 'Upcoming Events and Activities',
      preview: 'We have a lot of exciting events lined up for the coming months...',
      fullText: 'Here is the full article text for the third article...',
    },
  ];

  return (
    <section className="bg-[#07395D] py-8 px-6 mt-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white shadow-md p-4 rounded-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.preview}</p>
              <Link to={`/article/${article.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
