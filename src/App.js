// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className='col-12'> 
            <Navbar/> 
          </div>
          <div className="col-12 text-center">
            <Header />
          </div>
          <div className="col-12 col-md-6 text-end left-col">
            <Experience />
            <Skills />
          </div>
          <div className="col-12 col-md-6 text-end text-md-start right-col">
            <Education />
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;