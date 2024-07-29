import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import Benefits from '../Benefits/Benefits';
import Slideshow from '../slideshow/Slideshow';
import Blogcard from '../blogcards/Blogcard';
import Customer from '../customer/Customer';
import Rating from '../Rating/Rating';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <div className="home-start" style={{ height: '700px' }}>
        <div className="data">     
          <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true"> Travel & Tours</h1>
          <p data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-easing="ease-in-out">
            A free template by <a href="#">Colorlib</a>. Download and share!
          </p>
          <a data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-easing="ease-in-out" href="#" className="button1">
            VISIT COLORLIB</a>
        </div>
      </div>
      <div className="home-heading">
        <img data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true"  data-aos-delay="300" src="./mountain.jpg" alt="" />
        <div className='heading-data' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
          <h3>Welcome To Our Website</h3>
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
             <br />A small river named Duden flows by their place and supplies it with the necessary regelialia."</p>
        </div>
      </div>
      <div className='container1'>
      <div className='container-data' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
          <h2>Experience Once In Your Life Time</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
         <Benefits/>
      </div>
    <div className='slideshow-section1'>
    <div className='container-data' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
          <h1 >International Tour <br /> Management.</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
      <Slideshow/>
      <div className='container-data font' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
          <h1 >Recent Blog Post</h1>
          <p > Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
      <Blogcard/>
      </div>
      <div className='customer-section'>
        <div className='container-data' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
          <h1 style={{ color: 'black' }}>Happy Customers</h1>
        </div>
        <Customer/>
        </div>
        <div className='Rating-section'>
        <div className='container-data' data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true" >
          <h1 style={{ color: 'black' }}>Top Destination</h1>
          <p style={{ color: 'black' }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
             iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro,
              culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
        </div>
         <Rating/>
        </div>
      </div>
  );
}

export default Home;
