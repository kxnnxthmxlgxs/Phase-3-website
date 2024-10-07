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
      title: 'My own journey with cferi and running my own store on campus',
      preview: 'My journey with CFERI began during a period of uncertainty. I had a vision but lacked the necessary funding and direction. Joining the program was one of the scariest decisions I’ve ever made, but it turned out to be a beacon of hope.',
    },
    {
      id: 2,
      image: SuccessArticle2,
      title: 'My journey through Music and Dance production',
      preview: 'Allow me to share my journey, interwoven with the vibrant production of “Ain’t Misbehavin’.” Music is a universal language, flowing effortlessly from our tongues to touch the souls of others. It transcends borders and languages, stirring emotions even in the most stoic hearts.',
    },
    {
      id: 3,
      image: SuccessArticle3,
      title: 'Overcoming Challenges, My Inspiring Journey to Academic Success',
      preview: 'The path to academic success is often laden with challenges, but it also brings moments of profound self-discovery and triumph. As an Honours Psychology student at Nelson Mandela University, I, Hlubikazi Ntomibikayise Qunta, have navigated this journey with resilience, determination, and unwavering faith.',
    },
  ];

  return (
    <section className=" py-8 px-6 mt-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#061C2C]">Success</h2>
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
