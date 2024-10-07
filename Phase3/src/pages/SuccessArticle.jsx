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
      title: 'My journey with CFERI and running my own store on campus',
      fullText: 'The Centre for Entrepreneurship Rapid Incubator (CFERI) at Nelson Mandela University was established with a dual purpose: to empower students to pursue their entrepreneurial aspirations and to cultivate a supportive ecosystem that nurtures innovation and creativity. My journey with CFERI began during a period of uncertainty. I had a vision but lacked the necessary funding and direction. Joining the program was one of the scariest decisions I’ve ever made, but it turned out to be a beacon of hope. Through workshops and mentorship from experienced entrepreneurs, I gained valuable insights into ideation, market research, business planning, and fundraising strategies. The programs emphasis on practical learning was pivotal. As part of a student-led venture incubator, I had the opportunity to collaborate with peers from diverse backgrounds. This environment not only broadened my perspective but also enhanced my understanding of teamwork, leadership, and problem-solving—crucial skills for navigating the complexities of the business world. Beyond acquiring technical skills, the initiative profoundly impacted my personal growth. It challenged me to think creatively and persevere in the face of adversity. Each setback became a learning opportunity, and every success fueled my determination to push the boundaries of innovation further. CFERI fostered a mindset shift, encouraging me to view challenges as opportunities for growth and innovation. This transformative perspective has influenced my entrepreneurial endeavors and equipped me with resilience and adaptability—traits essential in today’s dynamic landscape. This experience has also aligned perfectly with my role as a mentor at Phase 3 Residence, where I guide first-year students and share the knowledge I’ve gained. The CFERI initiative has empowered individuals like myself to turn ideas into reality and embark on entrepreneurial journeys with confidence and determination. Reflecting on my own journey, I am grateful for the opportunities and support provided by CFERI. It has equipped me with the skills and knowledge necessary for entrepreneurial success and has shaped both my worldview and aspirations',
    },
    {
      id: 2,
      image: SuccessImage2,
      title: 'My journey through Music and Dance production',
      fullText: 'Allow me to share my journey, interwoven with the vibrant production of “Ain’t Misbehavin’.” Music is a universal language, flowing effortlessly from our tongues to touch the souls of others. It transcends borders and languages, stirring emotions even in the most stoic hearts. For me, it began as a passion intertwined with dance, leading me through numerous competitions and accolades, such as itsartsafrica, UMTIZA Arts festivals, and more. Yet, I discovered that my path extended beyond dance alone; it embraced the realm of music and dance production. My musical journey began early, shaped by a deep appreciation for classical music that blossomed during my high school and university years. This passion harmoniously intersected with my love for theater and performance, forming a cohesive tapestry of my interests. This year, during my inaugural university year, I had the privilege to enrich my repertoire through the lively production of "Aint Misbehavin", collaborating with a talented cast from SMU, United States. In theater, colleagues quickly become family, united by shared dedication and creativity. Together, we poured our hearts into creating a memorable narrative, etching our story into the fabric of Aint Misbehavin. For me, music transcends mere chord progressions; it tells untold stories, inviting interpretation from each individual who engages with it. It sustains me daily, and I aspire to share its influence and teachings with others as I progress in my career.',
    },
    {
      id: 3,
      image: SuccessImage3,
      title: 'Overcoming Challenges, My Inspiring Journey to Academic Success',
      fullText: 'The path to academic success is often laden with challenges, but it also brings moments of profound self-discovery and triumph. As an Honours Psychology student at Nelson Mandela University, I, Hlubikazi Ntomibikayise Qunta, have navigated this journey with resilience, determination, and unwavering faith. My story serves as a beacon of hope for first-year students who may be struggling to find their way. My academic journey began in 2019 when I graduated high school with dreams yet to be defined. Unsure of my future direction, I took a gap year to reflect on my passions and career aspirations. It was during this time that I discovered my calling to become a clinical psychologist. This decision set me on a path to Nelson Mandela University (NMU), where I embarked on a Bachelor of Arts degree, majoring in Psychology and Public Administration. In 2021, I transitioned from East London to Cape Town, facing the daunting task of adapting to university life amidst the global COVID-19 pandemic. With classes moved online, I struggled to find my footing in a new learning environment. Navigating the system and understanding how to study for online tests and assignments was incredibly challenging. I had to develop new study methods to retain and comprehend the vast amount of content. Despite these hurdles, my passion for psychology deepened. Through my studies, I embarked on a journey of self-healing and personal growth. I learned to navigate my feelings and understand the traumas of my past, which strengthened my resolve to help others through psychology. The return to on-campus learning in my third year presented another set of challenges. It felt like being a first-year student all over again. The transition was tough, but with the support of amazing friends who guided me, I managed to acclimate to the demands of in-person classes. The pressure to maintain high academic standards was immense, particularly with the goal of being accepted into the Honours program, which only accepts 40 candidates from over 1000 applications. My commitment to excellence was unwavering. I diligently took notes weekly, avoiding the stress of last-minute cramming. My hard work and consistency paid off when I was provisionally accepted into the Honours program after my first end-of-year exam. That was the happiest moment of my degree. All my hard work had paid off. Throughout my academic journey, my faith played a crucial role. I always prayed throughout my degree. My God was my protector and guide. My friends and I often held prayer sessions before and during exams, drawing strength and comfort from our faith. My story is a testament to the power of perseverance, hard work, and faith. It encapsulates the scripture, "I can do all things through Christ who strengthens me" (Philippians 4:13). My success story serves as a reminder that challenges are not obstacles but opportunities for growth. With determination, support, and faith, anyone can achieve their dreams. Never give up on your dreams, no matter how difficult the journey may seem. Your hard work and faith will always light the way.',
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
          className="w-full h-64 object-contain rounded-lg mb-4"
        />
        <p className="text-gray-800 leading-relaxed">{article.fullText}</p>
      </div>
    </section>
  );
};

export default SuccessArticle;
