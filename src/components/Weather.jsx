import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Weather = () => {
    const [post, setPost] = useState(null);

    // const axios = require("axios");  

    const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: { city: 'Seattle' },
        headers: {
            'X-RapidAPI-Key': '8e1151854emshffd5791405e3100p1a4c87jsn0c9e533a939c',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    const fetchAPI = async (options) => {
        await axios.request(options).then(function (response) {
            setPost(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        fetchAPI(options);

    }, [])



    return (
        <>

        </>
    )
}

export default Weather