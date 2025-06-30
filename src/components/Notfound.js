import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Notfound() {
  const {user}=useAuth()

  return (
    <div style={{ flexDirection: "column" }}
className="container">
      <h4 className='heading'>Not Found</h4>
      {/* es ar mushaobs :( */}
      <Link to={user?"/home":"/"} className='button'>
        Go back
      </Link>
    </div>
  )
}

export default Notfound
