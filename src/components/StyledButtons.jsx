import React from 'react'
import { Button, styled } from '@mui/material';


const StyledButton = styled(Button)({
    height: "55px",
    width: "95px",
    marginRight: "10px",
    backgroundColor: "black",
    color:"white",
    '&:hover': {
        backgroundColor: "#1e1e1f",
    }
})


export default StyledButton