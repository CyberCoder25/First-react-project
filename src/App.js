import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider, useAuth } from "./context/AuthContext"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Home from "./components/Home"
import SinglePosts from "./components/SinglePosts"
import Notfound from "./components/Notfound"
import Header from "./components/Header"
import Footer from "./components/Footer"
 
function AppContent(){
  const {user}=useAuth()
  
  if (!user) {
    return (
 <>
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </>
    )
  }

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/posts/:id" element={<SinglePosts/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
        <Footer/>
    </>
  )
}

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <AppContent/>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App