import React, { Component } from "react";
import Navbar from "./navbar";
import Anasayfa from "./home";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from "./Create";



function App() {
    
  return (
      
      <div className="App">
        <Navbar/>
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Anasayfa />} />
            </Routes>
            <Routes>
              <Route path="/Create" element={<Create />} />
            </Routes>
          </BrowserRouter>
      
        </div>
       
      </div>
      
    );
}

export default App;
