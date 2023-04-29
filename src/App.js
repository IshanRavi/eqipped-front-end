import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from './components/view/Dashboard';
import Login from './components/view/Login';
import Navbar from './components/view/Navbar';
import Footer from './components/view/Footer';
import Home from './components/view/Home';
import Logout from './components/view/Logout';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />          
          
        </Routes>
        <Footer />

      </Router>


    </div>


  );
}

export default App;
