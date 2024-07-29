import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Rating.css'; 

const reviewsData = [
  {
    image: './view1.jpg', 
    title: 'Food & Wines',
    rating: 4,
    reviews: 3239
  },
  {
    image: './view2.jpg',
    title: 'Resort & Spa',
    rating: 4,
    reviews: 4921
  },
  {
    image: './view3.jpg',
    title: 'Hotel Rooms',
    rating: 3,
    reviews: 2112
  },
  {
    image: './mountain.jpg', 
    title: 'Mountain Climbing',
    rating: 5,
    reviews: 6421
  }
];

const Rating = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="reviews-container">
      {reviewsData.map((item, index) => (
        <div
          className="review-card"
          key={index}
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-delay={100 * index}
        >
          <img src={item.image} alt={item.title} className="review-image" />
          <h3 className="review-title">{item.title}</h3>
          <div className="review-rating">
            {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
          </div>
          <p className="review-count">{item.reviews} reviews</p>
        </div>
      ))}
    </div>
  );
};

export default Rating;
