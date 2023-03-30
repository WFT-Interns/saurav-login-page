import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import StyledButton from './StyledButtons';

const Homepage = ({ loginInfo }) => {
    const navigate = useNavigate();

    const showMovies = () => {
        navigate("/Movies");
    }
    const showWeather = () => {
        navigate("/Weather");
    }
    const showFootballScore = () => {
        navigate("/FootballScore");
    }

    return (
        <Box>
            {
                loginInfo.map((info) => (
                    <Box>
                        <Typography> {info.username} </Typography>
                        <Typography> {info.email} </Typography>
                        <Typography> {info.password} </Typography>
                    </Box>
                ))
            }
            <StyledButton onClick={showMovies}>Movies List</StyledButton>
            <StyledButton onClick={showWeather} >Show Weather</StyledButton>
            <StyledButton onClick={showFootballScore} >Show Football Score</StyledButton>
        </Box>
    )
}

export default Homepage