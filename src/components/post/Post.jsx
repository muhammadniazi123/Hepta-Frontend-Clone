import React from 'react';

function Post({ date, title, image }) {
  return (
    <div className="post">
      <img src={image} alt={title} />
      <div className="post-details">
        <span>{date}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Post;
