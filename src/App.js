import React, {useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import TypicalHead from './components/TypicalHead';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App(){
  // let apiKey = "af7593bacc434dca86c82b6daff566a3";
  // let apiKey = "acc9e0002097472b8d45036b5b361711";
  // let apiKey = "35e8f63a0f154a9ba160cc576fac5baa";
  // let apiKey = "96524b8d2c1f414baf97387a97e3b599";
  let apiKey = "7941e6c7c38146a78170754513992e5a";

  const [mode, setMode] = useState("light")
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#090939";
      document.body.style.color = "white"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
    return (
      <div>
          <Router>
              <Navbar mode={mode} toggleMode={toggleMode}/>
              <TypicalHead/>
              <Routes>
                <Route exact path="/" element={<News mode={mode} key="general" apiKey={apiKey} category="general"/>}/>
                <Route exact path="/business" element={<News mode={mode} key="business" apiKey={apiKey} category="business"/>}/>
                <Route exact path="/health" element={<News mode={mode} key="health" apiKey={apiKey} category="health"/>}/>
                <Route exact path="/science" element={<News mode={mode} key="science" apiKey={apiKey} category="science"/>}/>
                <Route exact path="/sports" element={<News mode={mode} key="sports" apiKey={apiKey} category="sports"/>}/>
                <Route exact path="/technology" element={<News mode={mode} key="technology" apiKey={apiKey} category="technology"/>}/>
              </Routes>
          </Router>
      </div>
    );
}
 export default App
