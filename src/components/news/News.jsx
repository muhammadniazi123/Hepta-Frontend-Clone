import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './News.css';
import PostList from '../PostList/PostList';
import Sidebar from '../Sidebar/Sidebar';

function News() {
    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
      }, []);
  return (
    <div>
      <div className="News-start">
        <div className="News-data">     
          <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Blog</h1>
          <p data-aos="fade-up" data-aos-once="true" data-aos-delay="100" data-aos-easing="ease-in-out">
            A free template by <a href="#">Colorlib</a>. Download and share!
          </p>
        </div>
      </div>
      <div className="App">
      <div className="content">
        <PostList/>      
        <Sidebar/>
      </div>
    </div>
    </div>
  )
}
export default News;

