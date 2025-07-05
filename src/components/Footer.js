import React from 'react'

function Footer() {
  return (
<footer className="footer">
  <div className="footerContent">
    <p>&copy; {new Date().getFullYear()} Tamta Khutsishvili • All rights reserved.</p>
    <div className="footerSocials">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
      <a href="https://www.linkedin.com/in/tamta-khutsishvili-85395b343/" target="_blank" rel="noopener noreferrer">💼</a>
    </div>
  </div>
</footer>
  )
}

export default Footer