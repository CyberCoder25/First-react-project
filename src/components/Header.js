import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logo from '../images/React_logo_wordmark.png'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Header() {
  const {user}=useAuth()

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logoImg" />
      </div>
        {
        !user && <h2>Log In</h2>
        }
      <nav className={!user ? "nav": "navLinksWrapper"}>
        {user ?(
          <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </>
        ) : (
          <>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
          </a>
          <a href="https://www.linkedin.com/in/tamta-khutsishvili-85395b343/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn/>
          </a>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header