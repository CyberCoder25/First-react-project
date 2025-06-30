import { useState } from "react"
import axios from "axios"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const [username, setUsername]=useState("")
  const [error, setError]=useState("")
  const {login}=useAuth()
  const navigate=useNavigate()

  const handleSubmit=async(e)=> {
    e.preventDefault()
    setError("")
    try {
      const res=await axios.get("https://jsonplaceholder.typicode.com/users")
      const foundUser=res.data.find(
        (user) => user.username.toLowerCase() === username.toLowerCase()
      )

      if (foundUser){
        login(foundUser)
        navigate("/home")
      } else {
        setError("მომხმარებელი არ არსებობს")
      }
    } catch {
      setError("შეცდომა")
    }
  }

  return (
    <div  className="container" >
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        {/* aq ver gadavwyvite disable gameketebina tu ara */}
        <input type="password" placeholder="password"/>
        <button type="submit">Log In</button>
    {
      error && 
      <p style={{ color:"red"}}>{error}</p>
      }
      </form>
      <div className="logInDiv">
        <div className="logInImgImg"></div>
      </div>
    </div>
  )
}

export default Login
