// src/pages/EventArticle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import EventImage1 from '../assets/images/eventImage1.png';
import EventImage2 from '../assets/images/eventImage2.png';

const EventsArticle = () => {
  const { id } = useParams();

  const events = [
    {
      id: 1,
      image: EventImage1,
      title: 'Phase 3 Triumphs at Campus Festival with Stellar Performance in Formations',
      fullText: 'Phase 3 Residence Celebrates Victory at Campus Festival with Stellar Performance in Formations. Phase 3 Residence celebrated a joyful victory in the Formations category at the Campus Festival, showcasing their talent and teamwork. Dominated by first-year students and led by choreographers Mr. Tshepo Mashilo and Ms. Emily Gabula, the group delivered a stellar performance that kept the entire audience of Nelson Mandela University students on their feet. The Formations competition assesses how well a team can work together to deliver a cohesive dance performance. It is one of the top contests among both on-campus and off-campus residences. Phase 3 Residence began their rehearsals early, allowing ample time to perfect their performance and build strong bonds among team members. One performer shared, "For me, it was a way of destressing and taking a break from academics. On a bad day in school, I always knew that at the end of the day, there was a formation rehearsal that would take all the stress away.” Choreographer Tshepo emphasized the importance of passion in dance: “We believe that great dancers are not great only because of their technique; it is the passion that makes them." This dedication was evident in the students` regular attendance and willingness to attend extra classes when needed. This strategy helped ensure everyone was on the same track during rehearsals. All the hard work paid off when Phase 3 Residence delivered a thrilling performance that left everyone stunned, securing victory in their first-ever participation in the tournament. Once again, Phase 3 Residence proved why they are known as the "House of Champions, Home of Excellence."',
    },
    {
      id: 2,
      image: EventImage2,
      title: 'CELEBRATING SPORTSMANSHIP, The campus Residence League',
      fullText: 'University life is a unique blend of academic and extracurricular activities, each contributing to the holistic development of a student. Among these activities, the Campus Residence League holds a special place in the hearts of those who play sports and those who support them. It serves as a refreshing break from the rigorous academic routine and makes university life exciting beyond the confines of classrooms and lecture venues. The league provides an avenue for students to showcase their talents, engage in healthy competition, and foster a sense of camaraderie among peers. The Campus Residence League encompasses soccer, rugby, netball, chess, and basketball. Phase 3 Residence is registered for four of the five sports: soccer, rugby, netball, and chess. The Campus Football League, divided into two divisions, started on May 5, 2024, with Phase 3 FC playing in Division 2. Four games have been played so far before the recess break. The team suffered a 2–0 loss against Smada FC in their first game and another loss against Omega FC (2–1), with Ntuthuko Nxumalo scoring the first goal of the season for his team. Our boys redeemed themselves in their third and last game, winning 3–2 against Lamsa FC, with Tshililo Tshikosi, Shaun Mathumbu, and team captain Luzuko Zito putting their names on the scoreboard. The last game was won by forfeit, as My Student House FC did not arrive on the field. Phase 3 FC is currently sitting in 8th place in the log. The Rugby Campus League commenced on May 19, 2024; two games were played before the closure of the league for recess. The first match witnessed Phase 3 Spartans playing the North Campus Derby against HP North Gods. The North Gods bagged a decisive 10–5 victory over the Phase 3 Spartans, with Akwande Magigaba scoring the team`s first try of the season. Phase 3 Spartans played their second game against Ocean View Underdogs on May 26, 2024, losing the game 22–10, with vice-captain Nkcubeko Ngcakani and Nqaba Sangoni putting the Spartans on the scoreboard. Phase 3 Spartans are currently sitting in 6th place in the log. The team manager of our soccer and rugby teams acknowledged the rough start this season but promised to push through and ensure that our residence finishes in the top three in their respective leagues. The team managers from all sports highlighted the lack of support from the students residing in our residence. Mr. Bayanda Maboza said in an interview, “Nothing boosts the morale of a team more than hearing the cheers of their fans on the sidelines. They give players the sense of knowing that they are not only playing for themselves but for the glory of the residence.” This sense of community and support is crucial for the success of our teams, and we encourage all students to come out and support their peers. The Campus Residence League is not just about competition; it`s about building lasting memories and strengthening the bonds within our university community.',
    },
    
  ];

  const event = events.find((e) => e.id === parseInt(id));

  return (
    <section className="bg-white py-8 px-6 mt-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">{event.title}</h2>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-800 leading-relaxed">{event.fullText}</p>
      </div>
    </section>
  );
};

export default EventsArticle;
