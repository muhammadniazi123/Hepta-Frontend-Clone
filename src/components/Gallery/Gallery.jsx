import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css';

function Gallery() {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
  return (
    <div>
    <div className="Gallery-start">
        <div className="data">     
          <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Gallery</h1>
          <p data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-easing="ease-in-out">
            A free template by <a href="#">Colorlib</a>. Download and share!
          </p>
        </div>
      </div> 
      <div className="Gallery-container"> 
        <img src="./beach.jpg" alt="" />
        <img src="./adventure.jpg" alt="" />
        <img src="./view1.jpg" alt="" />
        <img src="./view2.jpg" alt="" />
        <img src="./view3.jpg" alt="" />
        <img src="./mountain.jpg" alt="" />
        <img src="./view2.jpg" alt="" />
        <img src="./view3.jpg" alt="" />
  <div className="big1">        <img src="./view1.jpg" alt="" />
  </div>
  <div className="big2">        <img src="./view1.jpg" alt="" />
  </div>
  <img src="./view3.jpg" alt="" />
        <img src="./mountain.jpg" alt="" />
        <img src="./view2.jpg" alt="" />
        <img src="./view3.jpg" alt="" />
</div>  
 </div>
  )
}

export default Gallery
