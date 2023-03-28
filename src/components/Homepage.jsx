import React from 'react';
import { useNavigate } from "react-router-dom";

const Homepage = ({loginInfo}) => {
  const navigate = useNavigate();

  const showMovies = () =>{
      navigate("/Movies");
  }
  const showWeather = () =>{
      navigate("/Weather");
  }

  return (
    <div>
        {
            loginInfo.map((info)=>(
                <div>
                    <p> {info.username} </p>
                    <p> {info.email} </p>
                    <p> {info.password} </p>
                </div>
            ))
        }
        <button onClick={showMovies} > Movies List </button>
        <button onClick={showWeather} > Show Weather</button>
    </div>
  )
}

export default Homepage