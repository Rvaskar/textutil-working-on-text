
import './App.css';
import Alert from './componants/Alert';
import Navbar from './componants/Navbar';
import React, { useState } from 'react';
import Textform from './componants/Textform';

function App() {
  const [mode ,setMode] =useState('Light');
  //const [Alert , setAlert] = useState('null');

  //const showAlert = (message , type) =>{//this is called mehod
     //   setAlert({
     //     msg:message,
      //    type:type,
     //   })
   // }
  const toggleMode =() =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgruondcolor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgruondcolor='white';
    }
    }

  return (
    <>
  <Navbar title="textutils" About="About"/>
  
  <div className="container">
  <Textform  heading="Enter the text to analyze"/>
  </div>
    </>
  );
}

export default App;
