import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Notfound = () => {
  const { user } = useAuth();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Page Not Found</p>
        <p className="notfound-text">The page you're looking for doesn't exist.</p>
        <Link to={user ? '/home' : '/'} className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound