import React from 'react';
import Post from '../post/Post';
const posts = [
    { id: 1, date: 'February 27, 2018', title: 'Free Template by Colorlib', image: 'view1.jpg' },
    { id: 2, date: 'February 27, 2018', title: 'Free Template by Colorlib', image: 'view2.jpg' },
    { id: 3, date: 'February 27, 2018', title: 'Free Template by Colorlib', image: 'view3.jpg' },
    { id: 4, date: 'February 27, 2018', title: 'Free Template by Colorlib', image: 'beach.jpg' },
]

function PostList() {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} date={post.date} title={post.title} image={post.image} />
      ))}
    </div>
  );
}

export default PostList;
