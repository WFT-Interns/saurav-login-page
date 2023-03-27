import React from 'react'

const Homepage = ({loginInfo}) => {
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
    </div>
  )
}

export default Homepage