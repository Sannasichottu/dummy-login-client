import axios  from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './auth.css'

const Register = () => {
    const navigate =useNavigate('');
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,setConfirmpassword] = useState('');

    const handleSubmit = async (e) =>{
      await e.preventDefault();
        axios.post('http://localhost:3001/user/register',{
            name:name,
            number:number,
            email:email,
            password:password,
            confirmpassword:confirmpassword
        }).then((res) =>{
            console.log(res.data)
            if(res.status === 200) {
              alert("Register successfully check your mail for verfication Number")
              navigate('/login')
            }
          })
    }

    /*const handleSubmit = () => {
        console.log(email, password)
        axios.post('http://localhost:3001/user/register',
            {
                name:name,
                number:number,
                email: email,
                password: password,
                confirmpassword:confirmpassword
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    alert('Signup success.')
                } else {
                    alert('Error.')
                }
            }).catch(err => {
                console.log(err)
            })
    }*/

  return (
    <div className="login_page">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name" id="name"
                     name="name" value={name} onChange={(e) =>setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="number">Contact No</label>
                    <input type="number" placeholder="Enter your Contact No" id="number"
                  name="number" value={number} onChange={(e) =>setNumber(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                   name="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                     name="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" placeholder="Confirm password" id="cf_password"
                     name="confirmpassword" value={confirmpassword} onChange={(e) =>setConfirmpassword(e.target.value)} />
                </div>

                <div className="row">
                    <button type="submit">Register</button>
                </div>
            </form>
            <p>Already an account?  <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Register;