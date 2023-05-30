import { useState } from 'react';
import './App.css';
import Maincontent from './component/Maincontent';
import Navbar from './component/Navbar';

function App() {
  const [Dark, setDark] = useState("light")

  const toggleDark = () => {
    if(Dark === "light"){
      setDark("dark")
      document.body.style.backgroundColor = "grey"
      document.body.style.color = "white"
    }
    
    else{
      setDark("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
    
  }


  return (
    <>
    <Navbar Dark={Dark} toggleMode={toggleDark}/>
    <div className="container my-5">
    <Maincontent Dark={Dark}/>
    </div>

    </>
  );
}

export default App;
