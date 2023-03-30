import React, { useState } from 'react'
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import '../App.css'
import StyledButton from './StyledButtons';

export const Login = ({ addInfo, clearLoginInfo }) => {

    const [text, settext] = useState({ username: "", email: "", password: "" });

    const navigate = useNavigate();

    const handleText = (e) => {
        e.preventDefault();

        const value = e.target.value;

        settext({ ...text, [e.target.name]: value });
    }


    const handleSubmit = () => {
        addInfo(text);
        navigate("/Homepage");

    }

    const handleClear = () => {
        clearLoginInfo();
    }



    return (
        <Box>
            <Box className='Login'>
                <Box className="LoginContainer">
                    <Box className='LoginText'>
                        <h1>Login</h1>
                        <Box className="textContainer">
                            <Typography>Name</Typography>
                            <TextField label="Name" variant="outlined" className='TextField' name='username' type="text" value={text.username} onChange={handleText} />
                        </Box>
                        <Box className="textContainer">
                            <Typography>Email</Typography>
                            <TextField label="Email" variant="outlined" className='TextField' name='email' type="email" value={text.email} onChange={handleText} />
                        </Box>
                        <Box className="textContainer">
                            <Typography>Password</Typography>
                            <TextField label="Password" variant="outlined" className='TextField' name='password' type="password" value={text.password} onChange={handleText} />
                        </Box>
                        <br />
                        <Box className="buttonContainer">
                            <StyledButton onClick={handleSubmit} > Submit </StyledButton>
                            <StyledButton onClick={handleSubmit} > Clear </StyledButton>
                        
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Login;
