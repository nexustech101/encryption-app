// src/App.tsx
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavBar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import CrudApp from "./pages/CrudApp";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/about' element={<About />} />
          <Route path='/crud' element={<CrudApp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
