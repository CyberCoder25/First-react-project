import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* /-ის გამო ის იქნება პირველ ადგილზე */}
          <Route path="/" element={<Home/>}/>
          <Route path="./login" element={<Login/>}/>
          <Route path="./logout" element={<Logout/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
