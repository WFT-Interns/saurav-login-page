import './App.css';
import Login from './components/Login';
import Movies from './components/Movies'
import Weather from './components/Weather';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Homepage from './components/Homepage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loginInfo, setLoginInfo] = useState([]);

  const addInfo = (text) => {
    setLoginInfo([...loginInfo, text]);
  }

  const clearLoginInfo = () => {
    setLoginInfo([]);
  }



  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login addInfo={addInfo} clearLoginInfo={clearLoginInfo} />} />
          <Route path='/Homepage' element={<Homepage loginInfo={loginInfo} />} />
          <Route path='/Movies' element={< Movies />} />
          <Route path='/Weather' element={< Weather />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
