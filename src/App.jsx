
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Foreground from './components/Foreground';
import Cards from './components/Cards';
import Login from './components/Login';
import Register from './components/Register';
// other imports...


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={
          <>
            <div className='relative bg-[#E6E6DA] w-full h-svh '>
              <Foreground/>
            </div>
            <Cards />
          </>
          } />

      </Routes>
    </Router>
  );
}


export default App;

