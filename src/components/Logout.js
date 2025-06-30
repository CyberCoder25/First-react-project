import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Logout() {
  const {logout}=useAuth()
  const navigate=useNavigate()

  useEffect(()=>{
    logout()
    navigate("/")
  }, [logout, navigate])

  // aq setTimeOut-ic sheidzleboda :))
  return <div>Logging out...</div>
}

export default Logout
