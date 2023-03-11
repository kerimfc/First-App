import React, { Component } from "react";
import Navbar from "./navbar";
import Anasayfa from "./home";


function App() {
    return (
      <div className="App">
        <Navbar/>
        <div className="content">
            <Anasayfa></Anasayfa>
        </div>
       
      </div>
      
    );
}

export default App;
