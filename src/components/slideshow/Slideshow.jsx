import React, { useEffect } from 'react';
import './Slideshow.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slideshow() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  useEffect(() => {
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");
    var index = 0;

    function prevSlide(n) {
      index += n;
      console.log("prevSlide is called");
      changeSlide();
    }

    function nextSlide(n) {
      index += n;
      changeSlide();
    }

    function changeSlide() {
      if (index > slides.length - 1) index = 0;
      if (index < 0) index = slides.length - 1;

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
      }

      slides[index].style.display = "block";
      dots[index].classList.add("active");
    }

    changeSlide();

    document.getElementById('left-arrow').addEventListener('click', () => prevSlide(-1));
    document.getElementById('right-arrow').addEventListener('click', () => nextSlide(1));
  }, []);

  return (
    <div className="slideshow" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100">
      <div id="slider">
        <div className="slide" >
          <img src="./view1.jpg" alt="view1" />
        </div>

        <div className="slide" >
          <img src="./view2.jpg" alt="view2" />
        </div>

        <div className="slide" >
          <img src="./view3.jpg" alt="view3" />
        </div>

        <div className="slide" >
          <img src="./view1.jpg" alt="view1" />
        </div>

        <span className="controls" id="left-arrow">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
        <span className="controls" id="right-arrow">
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </div>
      <div id="dots-con">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Slideshow;
