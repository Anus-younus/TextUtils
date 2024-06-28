import './App.css';
// import About from './components/About/About';
import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("")
  const [text, setText] = useState("Enable Dark mode")

  const toggleMode = () => {
    if(mode === "dark"){
      setMode("light")
      setType("success");
      setMessage("Light mode has enabled");
      document.body.style.backgroundColor = "white"
      setTimeout(() => {
        setMessage("")
        setType("")
      }, 1500);
      setText("Enable Dark mode");
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor = "#212529"
      setType("success");
      setMessage("Dark mode has enabled");
      setTimeout(() => {
        setMessage("")
        setType("")
      }, 1500);
      setText("Enable Light mode")
    }

  }
  return (
    <>
   <Navbar mode={mode} toggleMode={toggleMode} text={text} />
   <Alert text={message} mode={type} />
   <div className="container my-2">
    <TextForm mode={mode} toggleMode={toggleMode}/>
   {/* <About mode={mode} /> */}
   </div>
    </>
  );
}

export default App;
