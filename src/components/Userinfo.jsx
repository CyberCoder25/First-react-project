import React from 'react'
import { useAuth } from '../context/AuthContext'

const Userinfo = () => {
  const { user } = useAuth();

  return (
    <div className="userinfo-container">
      <div className="userinfo-card">
        <div className="userinfo-header">
          <div className="user-avatar">{user?.username.charAt(0).toUpperCase()}</div>
          <div>
            <h1>{user?.username}</h1>
            <p className="user-subtitle">Account Information</p>
          </div>
        </div>

        <div className="userinfo-grid">
          <div className="info-section">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">{user?.phone}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Website:</span>
              <span className="info-value">{user?.website}</span>
            </div>
          </div>

          <div className="info-section">
            <h3>Address</h3>
            <div className="info-item">
              <span className="info-label">Street:</span>
              <span className="info-value">{user?.address.street}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Suite:</span>
              <span className="info-value">{user?.address.suite}</span>
            </div>
            <div className="info-item">
              <span className="info-label">City:</span>
              <span className="info-value">{user?.address.city}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Zipcode:</span>
              <span className="info-value">{user?.address.zipcode}</span>
            </div>
          </div>

          <div className="info-section">
            <h3>Company</h3>
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">{user?.company.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Catch Phrase:</span>
              <span className="info-value">{user?.company.catchPhrase}</span>
            </div>
            <div className="info-item">
              <span className="info-label">BS:</span>
              <span className="info-value">{user?.company.bs}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userinfo