import React, { useEffect } from 'react';
import './Blogcard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Blogcard() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const sections = [
        { Date: 'FEBRUARY 26, 2018' ,title: '45 Best Places To Unwind', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: './view1.jpg' },
        { Date: 'FEBRUARY 26, 2018' ,title: '45 Best Places To Unwind', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: './view1.jpg' },
        { Date: 'FEBRUARY 26, 2018' ,title: '45 Best Places To Unwind', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: './view1.jpg' }
    ];
    return (
        <div className="card-container">
            <div className="cards">
                {sections.map((section, index) => (
                    <div key={index} className="card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className="card__img">
                            <img src={section.image} alt={section.title} />
                        </div>
                        <div className="card_content">
                            <p>{section.Date}</p>
                            <h2><a href="">{section.title}</a></h2>
                            <p>{section.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogcard;
