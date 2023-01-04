import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './auth.css'

const Login = () => {



    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/user/login`,{
            email:email,
            password:password
        }).then((res) => {
            console.log(res.data);
            alert("user login successfull")
        }).catch((err) =>{
            console.log(err);
            alert("Please Enter correct Password");
        })
    }


  return (
    <div className="login_page">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >


                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                   name="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                     name="password" value={password} onChange={(e) =>setPassword(e.target.value)}  />
                </div>



                <div className="row">
                    <button type="submit">Login</button>
                     <Link to="/forgot_password">Forgot your password?</Link>
                </div>
            </form>
            <p>New Customer?  <Link to="/register">Register</Link>  </p>
    </div>
  )
}

export default Login;