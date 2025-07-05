import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Notfound() {
  const {user}=useAuth()

  return (
    <div
className="container notFound">
      <h4 className='notFoundH'>Not Found</h4>
      {/* es ar mushaobs :( */}
      <Link to={user ? "/home" :"/"} className='notFoundButton'>
        Go back
      </Link>
    </div>
  )
}

export default Notfound
