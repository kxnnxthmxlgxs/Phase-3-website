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
      title: 'Ebuhlanti Platform, Empowering Tomorrow`s Leaders',
      fullText: 'On the 3rd of May 2024, we witnessed the commencement of Ebuhlanti - The Kraal platform at the North Campus residence (Phase 3 Residence) under the facilitation of Mr Lusasa. This innovative program is specifically designed for male students, aiming to cultivate effective leaders, role models, and agents of positive change in both their personal and professional spheres. As a participant in this program, I found it to be a transformative experience that offers far more than just leadership training. The essence of Ebuhlanti lies in its holistic approach, addressing not only leadership skills but also fostering personal growth, empathy, communication, and social responsibility. The program is a vital resource for anyone looking to enhance their leadership capabilities and make a positive impact on those around them. The inaugural session of Ebuhlanti was a resounding success, evidenced by the impressive turnout and the enthusiastic participation of attendees. It was heartening to see so many of my peers come together with a shared commitment to personal and communal growth. The session`s activities and discussions were engaging, insightful, and left many of us feeling inspired and motivated. One of the key highlights of the session was the establishment of a WhatsApp group, which has become an essential tool for ongoing communication and support among participants. This group serves as a platform for continuous engagement, allowing us to share resources, ideas, and encouragement as we navigate the challenges and opportunities that come with leadership roles. Looking ahead, the Ebuhlanti program is set to continue into the second semester, with plans for more sessions and activities that will further enhance our development. Each session is designed to build on the previous one, ensuring that we continuously grow and evolve as leaders. The program seeks to achieve pertinent objectives such as Leadership Development, Self-Exploration, Effective Communication, Empathy and Inclusivity, Ethical Decision-Making, and Community Engagement—all of which are crucial for any aspiring leader. As a student of Phase 3, I am grateful for the opportunity to be a part of Ebuhlanti - The Kraal platform. It is not only an avenue for acquiring leadership skills but also a community where we can support each other and grow together. The lessons learned and the connections made here are invaluable, and I am confident that they will significantly impact our future endeavours. Ebuhlanti - The Kraal platform is more than just a leadership program; it is a movement towards creating a generation of male leaders who are well-equipped to drive positive change in their personal and professional lives. I am excited for the future sessions and the continued journey of growth and development that lies ahead for all of us involved. #EbuhlantiForever!',
    },
    {
      id: 2,
      image: LeadershipArticle2,
      title: 'Empowering Student Leaders, Phase 3 Residence Women in Leadership Workshop',
      fullText: 'In a vibrant university residence like Phase 3 Residence, nestled amidst the bustling Nelson Mandela University Campus Life, a transformative event unfolded on Saturday, the 20th of April 2024, aimed at empowering and inspiring young student leaders, particularly female. The Women in Leadership Workshop, organized exclusively for female student leaders at the residence, marked the beginning of a series of programs birthed by the residence managers to bring together a diverse group of enthusiastic individuals eager to cultivate their leadership skills and explore the nuances of female leadership in today`s world. Meticulously crafted by the residence managers, the workshop served as a platform for students to delve into various aspects of leadership through a gender-focused lens. Participants engaged in dynamic, robust discussions and insightful life lessons shared by the accomplished Dr. Noluvo Rangana (PhD). The casual conversation was designed to foster personal growth, enhance leadership competencies, and ignite a passion for driving positive change within the student community. By investing in the potential of its student leaders, the residence not only cultivates a culture of leadership excellence but also champions the vital role of women in shaping the future of leadership globally.',
    },
    {
      id: 3,
      image: LeadershipArticle3,
      title: 'The Dynamic Leadership of Phase 3 Residence',
      fullText: 'Student leadership plays a crucial role in shaping the student experience. Leaders serve as representatives, confidants, and advocates for their peers through both good and challenging times. The Phase 3 student leadership of 2024 exemplified these qualities from the very start of the year. In January 2024, they ensured that the residence was fully prepared to accommodate students, addressing maintenance needs and other essential preparations. Recognizing the importance of a strong start, the leaders quickly established an orientation program to welcome and integrate first-year students. This initiative fostered relationships between the leaders and new students, assuring them of dedicated support and guidance. To enhance their effectiveness, the newly formed leadership team participated in several relationship-building programs. The first was a three-day leadership training facilitated by the Department of Student Housing, aiming to develop the leaders` knowledge and skills, which they applied to their roles. Later in the first semester, a team-building activity was conducted, providing a much-needed break and allowing the leaders to reconnect with the mission and vision of their team, ensuring they operated at their best capacity. A unique aspect of the Phase 3 leadership is its structure, encompassing three different residences within one building. Despite this complexity, the leaders work seamlessly together. A dedicated management structure, comprising the three residence managers, three RSAs, three Prims, and three Secretaries, helps coordinate the functions of the residence. This structure, guided by the residence managers, ensures smooth operations and cohesive teamwork. This dynamic leadership team is committed to excellence, demonstrating a tight-knit collaboration that transcends their individual roles and residence blocks. Our unified efforts are a testament to their dedication to making Phase 3 a true "House of Champions, Home of Excellence."',
    },
    {
      id: 4,
      image: LeadershipArticle4,
      title: 'Leading the Charge for a Greener Tomorrow, The GCI clean-up Campaign',
      fullText: 'More than just a project, the GCI Clean-Up Campaign is a movement designed to instill a deep sense of environmental responsibility in students. Inspired by the urgent need to address environmental degradation, this initiative empowers young people to become catalysts for change. By engaging in direct action, students make a lasting impact on their lives and their community. The campaign was inspired by witnessing the detrimental effects of pollution. As educators and community leaders, we saw the need to educate students and empower them to take action. The GCI Clean-Up Campaign provides a platform for students to learn about environmental stewardship while actively contributing to the improvement of their surroundings. Through this campaign, students participate in cleaning up local parks, beaches, and neighborhoods. These hands-on experiences offer practical lessons in teamwork, perseverance, and civic responsibility. Students learn to appreciate the beauty of their environment and the importance of maintaining it for future generations. The impact of the GCI Clean-Up Campaign on our students is multifaceted. Firstly, it instills a sense of pride and accomplishment as they see the tangible results of their efforts, boosting their self-esteem and fostering a positive attitude toward community service. Additionally, by working towards a common goal, students develop strong bonds with their peers and a heightened sense of community spirit. Furthermore, the campaign serves as an educational tool, reinforcing classroom lessons about environmental science and sustainability. Students witness firsthand the consequences of pollution and the importance of waste management, recycling, and conservation. These lessons resonate with them long after the campaign concludes, influencing their future choices and behaviors. By participating in the GCI Clean-Up Campaign, students contribute to a cleaner, healthier environment and become advocates for sustainability. They carry these values forward, spreading awareness and inspiring others to join the cause. This ripple effect ensures that the impact of the campaign extends far beyond its immediate goals, creating a culture of environmental consciousness that benefits the entire community. The GCI Clean-Up Campaign is a testament to our commitment to fostering responsible, proactive citizens. By equipping students with the knowledge and skills to make a difference, we hope to leave a lasting mark on our community and inspire a brighter, more sustainable future. This initiative not only elevates our institution`s profile but also enriches the academic and personal growth of our students, preparing them to be the leaders of tomorrow.',
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
          className="w-full h-64 object-contain rounded-lg mb-4"
        />
        <p className="text-gray-800 leading-relaxed">{article.fullText}</p>
      </div>
    </section>
  );
};

export default LeadershipArticle;
