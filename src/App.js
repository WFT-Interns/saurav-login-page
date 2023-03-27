import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './components/Homepage';
import { useState } from 'react';

function App() {
  const [loginInfo, setLoginInfo] = useState([]);

  const addInfo = (text)=> {
    setLoginInfo([...loginInfo,text]);
  }

  const clearLoginInfo = ()=>{
    setLoginInfo([]);
  }

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Login addInfo={addInfo} clearLoginInfo= {clearLoginInfo} />} />
        <Route path='/Homepage' element={<Homepage loginInfo={loginInfo} />} />
      </Routes>
    </Router>

  );
}

export default App;
