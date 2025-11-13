import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-container">Error loading posts: {error}</div>;
  }

  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome, {user?.username}!</h1>
            <p className="hero-subtitle">Discover amazing stories and insights</p>
          </div>
        </div>
      </section>

      <section className="posts-section">
        <div className="section-header">
          <h2 className="section-title">Latest Posts</h2>
          <p className="section-subtitle">Explore our most recent articles</p>
        </div>

        <div className="posts-grid">
          {posts?.slice(0, 6).map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-card-header">
                <span className="post-id">#{post.id}</span>
              </div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">
                {post.body.split(' ').slice(0, 15).join(' ')}...
              </p>
              <Link to={`/posts/${post.id}`} className="post-link">
                Read More <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home