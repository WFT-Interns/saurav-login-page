import React from 'react'
import footballApi from '../config/axios.config';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const fetchUsers = async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await footballApi.get();
    console.log(response);
    return response.data;
};


const FootballScore = () => {

    const { data, status } = useQuery("users", fetchUsers);
    console.log(data);
    return (
        <>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <div>
            {data[0].map((user) => (
              <p key={user.id}>{user.title}</p>
            // <> {user.title} </>
            ))}

            <h1>{data[0].title}</h1>
          </div>
        )}
      </>
    )
}

export default FootballScore