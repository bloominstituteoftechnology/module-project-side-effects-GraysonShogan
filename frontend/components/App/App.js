import React, { useState } from "react";
import Posts from "../Posts/Posts";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../data/dummy-data";

const App = () => {
  const [posts, setPosts] = useState(dummyData);

  const likePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <SearchBar />
      <Posts posts={posts} likePost={likePost} />
    </div>
  );
};

export default App;
