import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios';
import './auth.css'
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/user/send-otp`,{
            email:email,
        }).then(res => {
            console.log(res.data);
            if(res.data.code === 200) {
                navigate('/otp')
            }else{
                alert("Email / Server Error.")
            }

        }).catch(err =>{
            console.log(err);
            alert("Please enter valid Email");
        })
    }


    return (
        <div className="login_page">
             <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>

        <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                   name="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                </div>

            <div className="row">
                    <button  type="submit">SEND OTP</button>
            </div>
        </form>

    </div>
    )
}

export default ForgotPassword
/*

 <h2>Forgot Your Password?</h2>
            <form onSubmit={handleSubmit}>
            <div className="row">
                <label htmlFor="email">Enter your email address</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                <button type='submit'>Verify your email</button> <Link to="/">🛖</Link>
            </div>
            </form>

            */