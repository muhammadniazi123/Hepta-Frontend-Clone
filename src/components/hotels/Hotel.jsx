import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Benefits from '../Benefits/Benefits';
import './Hotel.css';
import Slideshow from '../slideshow/Slideshow';
import Blogcard from '../blogcards/Blogcard';
function Hotel() {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
    
  return (
    <div>
           <div className="hotel-start">
        <div className="data">     
          <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true"> Our Hotel</h1>
          <p data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-easing="ease-in-out">
            A free template by <a href="#">Colorlib</a>. Download and share!
          </p>
        </div>
      </div>
      <div className='benefit-section'>
        <Benefits/>
      </div>
      <div className="hotel-heading first-hotel-heading" style={{ paddingBottom: '0px' }}>
        <img data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="300" src="./mountain.jpg" alt="" />
        <div className='heading-data' data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
          <h3>Family Room</h3>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
             <br />A small river named Duden flows by their place and supplies it with the necessary regelialia."</p>
             <a data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-easing="ease-in-out" href="#" className="button">
            Learn More</a>
        </div>
      </div>
      <div className="hotel-heading second-hotel-heading" style={{ paddingTop: '0px' }}>
        
        <div className='heading-data' data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
          <h3>Presidential Room</h3>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
             <br />A small river named Duden flows by their place and supplies it with the necessary regelialia."</p>
             <a data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-easing="ease-in-out" href="#" className="button">
             Learn More</a>
        </div>
        <img data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="300" src="./mountain.jpg" alt="" />
      </div>
      <div className='hotel-slideshow-section'>
    <div className='container-data' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
          <h1 >International Tour <br /> Management.</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
             
        </div>
      <Slideshow/>
      <div className='container-data' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
          <h1 style={{ color: 'black' }}>Recent Blog Post</h1>
          <p style={{ color: 'black' }}> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
      <Blogcard/>
      </div>
    </div>
  )
}

export default Hotel
