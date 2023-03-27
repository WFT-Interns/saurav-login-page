import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = ({addInfo,clearLoginInfo}) => {

    const [text, settext] = useState({ username: "", email: "", password: "" });

    const navigate = useNavigate();

    const handleText = (e) => {
        e.preventDefault();

        const value = e.target.value;

        settext({ ...text, [e.target.name]: value });
    }
    

    const handleSubmit = ()=>{
    addInfo(text);
    navigate("/Homepage");

    }

    const handleClear = () => {
        clearLoginInfo();
    }


    return (
        <div>
            <div className='Login'>
                <div className="LoginContainer">
                    <div className='LoginText'>
                        <h1>Login</h1>
                        <h6>Name</h6>
                        <input className='TextField' name='username' type="text" value={text.username} onChange={handleText} />
                        <h6>Email</h6>
                        <input className='TextField' name='email' type="email" value={text.email} onChange={handleText} />
                        <h6>Password</h6>
                        <input className='TextField' name='password' type="password" value={text.password} onChange={handleText} />
                        <br />
                        <button className='Button' type='submit' onClick={handleSubmit}>Submit</button>
                        <button className='Button ClearButton' onClick={handleClear}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
