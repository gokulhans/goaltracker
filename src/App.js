import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/login';
import Home from './pages/home/home';
import AddProject from './pages/forms/AddProject';
import Singleproject from './pages/singleproject/Singleproject';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <>
      <div className="mt-24">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home isAuth={isAuth} />} />
            <Route path="/project/:id" element={<Singleproject isAuth={isAuth} />} />
            <Route path="/createpost" element={<AddProject isAuth={isAuth} />} />
            <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home isAuth={isAuth} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
