import React from 'react';
import './Sidebar.css'

const popularPosts = [
  { id: 1, date: 'February 27, 2018', title: 'Free Template by Colorlib', image: 'view1.jpg' },
  { id: 2, date: 'February 27, 2018', title: 'Free Template by Colorlib', image: 'view2.jpg' },
  { id: 3, date: 'February 27, 2018', title: 'Free Template by Colorlib', image: 'view3.jpg' },
  { id: 4, date: 'February 27, 2018', title: 'Free Template by Colorlib', image: 'beach.jpg' },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="popular-posts">
        <h3>Popular Post</h3>
        {popularPosts.map(post => (
          <div key={post.id} className="popular-post post-now ">
            <img src={post.image} alt={post.title} />
            <div className="post-details">
              <span>{post.date}</span>
              <h4>{post.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          <li><a href="">Events (12) </a></li>
          <li><a href="">Resto bar (4)</a></li>
          <li><a href="">Celebration (23) </a></li>
          <li><a href="">Promos (8)</a></li>
      
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
