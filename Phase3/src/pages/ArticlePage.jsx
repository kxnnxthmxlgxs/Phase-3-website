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
      fullText: 'On March 15, 2024, Nelson Mandela University proudly opened the doors to the new Phase 3 Residence, a state-of-the-art facility designed to enhance student life on campus. The inauguration ceremony was graced by the Honourable Minister of Higher Education, Science, and Innovation, Prof. Blade Nzimande, who unveiled a commemorative plaque marking this special occasion. The event welcomed prominent figures including NMU’s Chairperson of Council, Ms. Nozipho January-Bardill, Vice-Chancellor Professor Sibongile Muthwa, and other distinguished guests. Funded by the Department of Higher Education and Training, this new residence represents a significant step forward in student accommodation and university infrastructure. The celebration was brought to life by the vibrant Phase 3 Residence Choir, alongside the house committee, creating an atmosphere of unity and excitement. The students and staff shared in the joy, proud to witness the official opening of their new home. During his keynote speech, Prof. Nzimande emphasized the importance of student residences, stating: “University residences are more than just places to sleep—they’re where students study, socialize, and engage in meaningful experiences.” His words underscored the vital role these accommodations play in the success and well-being of students at NMU.',
    },
    {
      id: 2,
      image: NewsArticle2,
      title: 'Phase 3 Residence: A Secure Community for Students',
      fullText: 'At the start of this year, Phase 3 Residence welcomed 685 students across six blocks, four of which are reserved for female students. While the residence quickly became a vibrant community, early security challenges raised concerns among residents. Limited controlled entry and inactive magnetic locks, coupled with the absence of dedicated security personnel, led to reports of unfamiliar individuals and missing items. In response, the house committee and residence management swiftly acted, arranging a meeting with protection services and campus stakeholders. Within a week, significant improvements were made, including the installation of a gate, a reinforced fence, and dedicated security personnel for Phase 3. Magnetic door locks were fully activated, ensuring only authorized students could enter the residence. By the semester’s end, these enhancements created a safer environment, fostering a sense of security and community among residents. The collaborative efforts of all parties involved transformed Phase 3 into a secure and supportive space for students to thrive.',
    },
    {
      id: 3,
      image: NewsArticle3,
      title: 'Discover New Worlds: Join Our Book Club!',
      fullText: 'Are you passionate about books and excited by the thought of exploring new stories and diverse perspectives? We have great news for you! Starting in the second semester, our residence will be launching a brand-new Book Club. Whether you are an avid reader or just looking to explore the magic of literature, this club promises to be a rewarding experience for all. 4 Compelling Reasons to Join, Expand Your Literary Horizons, Engage in Stimulating Intellectual Discussion, Enhance Your Critical Skills, Foster a Sense of Community. Get Involved, dont miss this chance to immerse yourself in the world of literature and connect with fellow book lovers. To join, email Entle Skama at s2251628@mandela.ac.za',
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
          className="w-full h-64 object-contain rounded-lg mb-4"
        />
        <p className="text-gray-800 leading-relaxed">{article.fullText}</p>
      </div>
    </section>
  );
};

export default ArticlePage;
