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
      title: 'Ebuhlanti Platform, Empowering Tomorrow`s Leaders',
      preview: 'Phase 3 North Campus Residence has launched a program aimed at shaping effective male leaders. The program seeks to achieve pertinent objectives such as leadership development, self-exploration, effective communication, empathy and inclusivity, ethical decision-making, and community engagement, all of which are crucial for any aspiring leader.',
    },
    {
      id: 2,
      image: LeadershipArticle2,
      title: 'Empowering Student Leaders, Phase 3 Residence Women in Leadership Workshop',
      preview: 'In a vibrant university residence like Phase 3 Residence, nestled amidst the bustling Nelson Mandela University Campus Life, a transformative event unfolded on Saturday, the 20th of April 2024, aimed at empowering and inspiring young student leaders, particularly female.',
    },
    {
      id: 3,
      image: LeadershipArticle3,
      title: 'The Dynamic Leadership of Phase 3 Residence',
      preview: 'Student leadership plays a crucial role in shaping the student experience. Leaders serve as representatives, confidants, and advocates for their peers through both good and challenging times. The Phase 3 student leadership of 2024 exemplified these qualities from the very start of the year.',
    },
    {
      id: 4, // Change id to 4 for uniqueness
      image: LeadershipArticle4,
      title: 'Leading the Charge for a Greener Tomorrow, The GCI clean-up Campaign',
      preview: 'The GCI Clean-Up Campaign is a dynamic initiative that fosters environmental responsibility among students, teaching them the importance of sustainability, teamwork, and community involvement.',
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
