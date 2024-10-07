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
      preview: 'On March 15, 2024, Nelson Mandela University proudly opened the doors to the new Phase 3 Residence, a state-of-the-art facility designed to enhance student life on campus....',
      fullText: '',
    },
    {
      id: 2,
      image: NewsArticle2,
      title: 'Phase 3 Residence: A Secure Community for Students',
      preview: 'At the start of this year, Phase 3 Residence welcomed 685 students across six blocks, four of which are reserved for female students. While the residence quickly became a vibrant community, early security challenges raised concerns among residents.',
      fullText: 'Here is the full article text for the second article...',
    },
    {
      id: 3,
      image: NewsArticle3,
      title: 'Explore the world of Words. Join our new residence book club',
      preview: 'Are you passionate about books and excited by the thought of exploring new stories and diverse perspectives? We have great news for you! Starting in the second semester, our residence will be launching a brand-new Book Club. ',
      fullText: '',
    },
  ];

  return (
    <section className="bg-gradient-to-l from-[#07395D] to-[#FECA1F] py-8 px-6 mt-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Latest News</h2>
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
