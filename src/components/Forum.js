import React, { useState } from "react";
import "./Forum.css";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [viewPost, setViewPost] = useState(null);

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      const updatedPosts = [...posts, { ...newPost, id: Date.now() }];
      setPosts(updatedPosts);
      setNewPost({ title: "", content: "" });
    }
  };

  const handleViewPost = (postId) => {
    const post = posts.find((p) => p.id === postId);
    setViewPost(post);
  };

  const handleBackToList = () => {
    setViewPost(null);
  };

  return (
    <div className="forum">
      <h1>Community Forum</h1>
      {!viewPost ? (
        <>
          {/* Post List */}
          <div className="post-list">
            <h2>Recent Discussions</h2>
            {posts.length === 0 ? (
              <p>No posts yet. Start a discussion!</p>
            ) : (
              posts.map((post) => (
                <div key={post.id} className="post-item">
                  <h3>{post.title}</h3>
                  <button onClick={() => handleViewPost(post.id)}>View</button>
                </div>
              ))
            )}
          </div>

          {/* Create Post */}
          <div className="create-post">
            <h2>Create a New Post</h2>
            <input
              type="text"
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <textarea
              placeholder="Post Content"
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
            ></textarea>
            <button onClick={handleCreatePost}>Submit Post</button>
          </div>
        </>
      ) : (
        /* View Post */
        <div className="view-post">
          <h2>{viewPost.title}</h2>
          <p>{viewPost.content}</p>
          <button onClick={handleBackToList}>Back to Forum</button>
        </div>
      )}
    </div>
  );
};

export default Forum;
