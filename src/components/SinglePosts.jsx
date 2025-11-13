import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const SinglePosts = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-container">Error loading post: {error}</div>;
  }

  return (
    <div className="single-post-container">
      <article className="single-post">
        <Link to="/home" className="back-link">
          ← Back to Home
        </Link>
        <div className="post-header">
          <span className="post-badge">Post #{post?.id}</span>
          <h1 className="post-title-large">{post?.title}</h1>
        </div>
        <div className="post-content">
          <p>{post?.body}</p>
        </div>
      </article>
    </div>
  );
};

export default SinglePosts