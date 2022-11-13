import React from "react"
import './App.css';
import Title from "./Title"
import Qr from "./Qr";

function App() {
    
  return (
    <div className="app">
      
        <img style={{width:"50vw",height:"100vh"}}src="./brooke-lark-RrzeCGujVfU-unsplash.jpg" alt="food"/>
      
      <div className="scan">
      <Title/>
      <Qr/>
      </div>
    </div>
  );
}

export default App;
