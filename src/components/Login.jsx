import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const foundUser = res.data.find(
        (user) => user.username.toLowerCase() === username.toLowerCase()
      );

      if (foundUser) {
        login(foundUser);
        navigate('/home');
      } else {
        setError('მომხმარებელი არ არსებობს');
      }
    } catch {
      setError('სერვერთან დაკავშირების შეცდომა');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <div className="login-hero">
            <h1 className="hero-title">Welcome Back</h1>
            <p className="hero-subtitle">Sign in to access your blog and explore amazing content</p>
            <div className="hero-features">
              <div className="feature">
                <div className="feature-icon">📚</div>
                <p>Access exclusive posts</p>
              </div>
              <div className="feature">
                <div className="feature-icon">✨</div>
                <p>Personalized experience</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <p>Stay updated</p>
              </div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Sign In</h2>
            <p className="form-subtitle">Enter your credentials to continue</p>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
              {!loading && <FaArrowRight />}
            </button>

            <p className="form-hint">Hint: Try username "Bret" or "Antonette"</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login