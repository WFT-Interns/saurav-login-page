import React from 'react'

import { aircraftApi } from '../config/axios.config'
import { useQuery } from 'react-query'



const Aircraft = () => {


    const fetchAircraftInfo = async () => {
        const response = await aircraftApi.get();
        // console.log(response);
        return response.data;
    }


    const { data, status } = useQuery("aircraft", fetchAircraftInfo);
    console.log(data);

  return (
    <>
    
    {status === "error" && <p>Error Fetching Data</p>}
    {status === "loading" && <p> Loading Data...</p>}



    {
        status === "success" && (

            

        <div>
            
            <p>{data[0].manufacturer}</p>
            <p>{data[0].model}</p>
            <p>{data[0].engine_type}</p>
            <p>{data[0].engine_thrust_lb_ft}</p>
            <p>{data[0].max_speed_knots}</p>
            <p>{data[0].cruise_speed_knots}</p>
            <p>{data[0].ceiling_ft}</p>
            <p>{data[0].takeoff_ground_run_ft}</p>
            <p>{data[0].landing_ground_roll_ft}</p>
            <p>{data[0].gross_weight_lbs}</p>
            <p>{data[0].empty_weight_lbs}</p>
            <p>{data[0].length_ft}</p>
            <p>{data[0].height_ft}</p>
            <p>{data[0].wing_span_ft}</p>
            <p>{data[0].range_nautical_miles}</p>
            
        </div>
    )}

    </>
  )
}

export default Aircraft