import React, { useState } from 'react'

export const Login = (props) => {

    const [Initialtext, setInitialtext] = useState({ username: "", email: "", password: "" })
    const [click, setclick] = useState(false)
    // const [text2,setText2] = useState("");
    // const [text3,setText3] = useState("");

    const handlechange = (e) => {
        const value = e.target.value;
        setInitialtext(
            {
                ...Initialtext,
                [e.target.name]: value
            }
        )
    }


    const handleClear = () => {
        setInitialtext({ username: "", email: "", password: "" })
    }

    return (
        <div>
            <div className='Login'>
                <div className="LoginContainer">
                    <div className='LoginText'>
                        <h1>{props.Title}</h1>
                        <h6>Name</h6>
                        <input className='TextField' name="username" value={Initialtext.username} type="text" onChange={handlechange} />
                        <h6>Email</h6>
                        <input className='TextField' name="email" value={Initialtext.email} type="email" onChange={handlechange} />
                        <h6>Password</h6>
                        <input className='TextField' name="password" value={Initialtext.password} type="password" onChange={handlechange} />
                        {/* <hr /> */}
                        <button className='Button' onClick={() => setclick(true)}>Submit</button>
                        {
                            click && (
                                <div>
                                    <p>{Initialtext.username}</p>
                                    <p>{Initialtext.email}</p>
                                    <p>{Initialtext.password}</p>
                                </div>
                            )
                        }
                        <button className='Button ClearButton' onClick={handleClear}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
