import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Benefits.css';

function Benefits () {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
    }, []);

    const sections = [
        { title: 'Good Foods', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: './food.svg' },
        { title: 'Travel Anywhere', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: './earth.svg' },
        { title: 'Airplane', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: './plane.svg' },
        { title: 'Beach Resort', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: './beach.svg' },
        { title: 'Mountain Climbing', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: './mountain.svg' },
        { title: 'Hot Air Balloon', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: './balloon.svg' },
    ];

    return (
        <div className='benefit'>
            {sections.map((section, index) => (
                <div key={index} className="section">
                    <img data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" src={section.image} alt={section.title} />
                    <h2 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">{section.title}</h2>
                    <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="200">{section.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Benefits;
