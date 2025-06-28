import Home from "./components/Home";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Notfound from "./components/Notfound";
import PostJson from "./components/PostJson";
import SinglePosts from "./components/SinglePosts";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/logout">Log Out</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <Routes>
          {/* /-ის გამო ის იქნება მთავარ ადგილზე */}
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/posts" element={<PostJson/>}/>
          <Route path="/posts/:id" element={<SinglePosts/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;