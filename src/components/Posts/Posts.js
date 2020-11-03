import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = ({ likePost, posts, searchTerm }) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const searchedPosts = posts.filter((post) =>
    post.username.includes(searchTerm)
  );

  console.log(searchedPosts);
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {searchedPosts.map((post) => (
        <Post key={post.id} post={post} likePost={likePost} />
      ))}
    </div>
  );
};

export default Posts;
