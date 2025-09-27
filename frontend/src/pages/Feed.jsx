// src/pages/Feed.jsx
import React, { useEffect, useState } from "react";
import API from "../api";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/posts"); // Make sure backend is running
        setPosts(res.data); // res.data should be an array of posts
      } catch (err) {
        console.error("AxiosError", err);
      }
    };

    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]); // prepend new post
  };

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <CreatePost onPostCreated={handlePostCreated} />
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
}

export default Feed;
