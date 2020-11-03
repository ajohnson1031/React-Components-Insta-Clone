import React from "react";
import Comment from "./Comment";
import "./Comments.css";

const Comments = ({ comments }) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
