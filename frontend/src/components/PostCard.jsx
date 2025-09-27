// src/components/PostCard.jsx
import React from "react";

function PostCard({ post }) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <div className="flex items-center mb-2">
        <img
          src={post.user?.avatar || "/default-avatar.png"}
          alt={post.user?.name || "User"}
          className="w-10 h-10 rounded-full mr-3"
        />
        <h3 className="font-bold">{post.user?.name || "Unknown"}</h3>
      </div>
      <p>{post.content}</p>
    </div>
  );
}

export default PostCard;
