import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from './components/view/Dashboard';
import Login from './components/view/Login';
import Navbar from './components/view/Navbar';
import Footer from './components/view/Footer';
import Home from './components/view/Home';
import Logout from './components/view/Logout';
import Sidebar from './pages/view/Sidebar';
function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <div class="container-fluid text-center">
            <div class="row">
              <div class="col-2">
                <ul class="list-group list-group-flush">
                  <Sidebar />
                </ul>
              </div>
              <div class="col-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/logout" element={<Logout />} />
                  <Route path="/dashboard" element={<Dashboard />} />

                </Routes>
                <Footer />
              </div>
              <div class="col-2">
                <ul class="list-group list-group-flush">
                  {/* <Sidebar /> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Router>








    </div>


  );
}

export default App;
