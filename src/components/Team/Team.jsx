import React, { useEffect } from 'react';
import './Team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const teamMembers = [
  {
    name: 'Vince Richardson',
    role: 'CEO, CO-FOUNDER',
    imgSrc: './profile.jpg',
  },
  {
    name: 'Jean Love',
    role: 'CTO, CO-FOUNDER',
    imgSrc: './profile.jpg',
  },
  {
    name: 'Jeff Stark',
    role: 'MARKETER, CO-FOUNDER',
    imgSrc: './profile.jpg',
  },
  // Add more team members as needed
];

const Team = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member"data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay={100 * index}>
          <img src={member.imgSrc} alt={member.name} className="team-photo" />
          <p className="title">{member.role}</p>
          <h2>{member.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Team;
