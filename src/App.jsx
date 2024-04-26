import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPass from "./components/ForgotPass";
import Otp from "./components/Otp";
import Events from "./components/Events";
import Scholorship from "./components/Scholorship";
import { dummyData } from "./utils/dummydata";
import LandingPage2 from "./components/LandingPage2";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" Component={LandingPage2} />
        <Route path="/login" Component={Login} />
        <Route path="/sign-up" Component={Signup} />
        <Route path="/forgot-password" Component={ForgotPass} />
        <Route path="/otp" Component={Otp} />
        <Route path="/events" Component={Events} />
        <Route path="/scholorship" Component={Scholorship} />
      </Routes>
    </Router>
  );
}

export default App;
