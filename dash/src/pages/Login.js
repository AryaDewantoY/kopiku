import Header from './Header'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Login() {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add");
        }
    }); 

    async function login() {
        console.warn(email, password);
        let item = {email, password};
        let result = await fetch('http://localhost:8000/api/login', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add");
    }

    return (
        <div>
            <Header />
            <h1 className='mt-5'>Page Login</h1>
            <br />
            <div className='col-sm-6 offset-sm-3'>
            <input 
            type='text' 
            placeholder='email' 
            className='form-control' 
            onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input 
            type='password' 
            placeholder='password' 
            className='form-control' 
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={login} className='btn btn-primary'>Login</button>
            </div>
            </div>
    )
} 

export default Login