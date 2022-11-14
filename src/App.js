import React,{useState} from "react"
import './App.css';
import Title from "./Title"
import Qr from "./Qr";

function App() {
  const [toggle,setToggle]=useState(false);
    
  return (
    <div className="app">
      
        <img style={{width:"50vw",height:"100vh"}}src="./brooke-lark-RrzeCGujVfU-unsplash.jpg" 
        alt="varieties of food on the plates on the table"/>
      
      <div className="scan">
      <nav>
        <ul>
          {!toggle && <li><button className="toggle" onClick={()=>setToggle(true)} >DE</button></li>}
      {toggle && <li><button className="disabled"  disabled>DE</button></li>}
      {toggle && <li><button className="toggle" onClick={()=>setToggle(false)} >EN</button></li>}
      {!toggle && <li><button className="disabled"  disabled>EN</button></li>}
      
        </ul>
      </nav>
        
      <Title toggle={toggle}/>
      <Qr toggle={toggle}/>
      
      </div>
    </div>
  );
}

export default App;
