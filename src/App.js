import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')//Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0a3574';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }



  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode}/>
    <div className="container">
    <Routes>
          <Route exact path="/home" element={
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter" mode={mode}/>
           }>
          </Route>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
