import React, { useState } from 'react'
import { celebrityApi } from '../config/axios.config'
import { useQuery } from 'react-query'
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';
import StyledButton from './StyledButtons';
import { useMutation } from 'react-query';


const Celebrity = () => {

    const [params, setParams] = useState({ name: '' });

    const handleText = (e) => {
        e.preventDefault();

        const value = e.target.value;

        setParams({ ...params, [e.target.name]: value });
    }

    const fetchCelebrityInfo = async () => {
        const response = await celebrityApi.get("", { params });
        return response.data;
    }

    const { data, status } = useQuery("celebrity", fetchCelebrityInfo);

    const { mutate, mutateStatus } = useMutation((params) => {
        
        return celebrityApi.get("", { params });
    });

    const handleSubmit = () => {
        mutate(params);
    };



    return (

        <>
            <h1>Show A Celebrity Info</h1>
            <TextField label="Name" variant="outlined" name='name' type="text" value={params.name} onChange={handleText} />
            <StyledButton onClick={handleSubmit} > Submit </StyledButton>

            {mutateStatus === "error" && <p>Error Fetching Data</p>}
            {mutateStatus === "loading" && <p> Loading Data...</p>}

            {status === "success" && (
                <Box>
                    <p>{data[0].name}</p>
                    <p>{data[0].net_worth}</p>
                    <p>{data[0].gender}</p>
                    <p>{data[0].nationality}</p>
                    <p>{data[0].height}</p>
                    <p>{data[0].birthday}</p>
                    <p>{data[0].age}</p>
                    <p>{data[0].is_alive}</p>

                    <Box>
                        <p>Occupation</p>
                        <ul>
                            <li>{data[0].occupation[0]}</li>
                            <li>{data[0].occupation[1]}</li>
                            <li>{data[0].occupation[2]}</li>
                            <li>{data[0].occupation[3]}</li>
                        </ul>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default Celebrity;
