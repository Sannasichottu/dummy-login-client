import React,{useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

//import { Link } from 'react-router-dom';

const NewSubmit = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(otp, password)
        axios.post('http://localhost:5000/user/submit-otp',
            {
                otp: otp,
                password: password,
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    navigate('/login')
                    alert('Password Updated.')
                }else {
                    alert('server err / wrong OTP')
                }
            }).catch(err => {
                console.log(err)
            })
    }


  return (
    <div className="login_page">
         <h2>New Password</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="otp">OTP</label>
                <input type="number" name="otp" id="otp" placeholder='Enter your OTP' onChange={(e) => {
                        setOtp(e.target.value)
                    }}
                    value={otp} />
            </div>
            <div>
                <label htmlFor="newpwd">New Password</label>
                <input type="password" name="newpwd" id="newpwd" placeholder='Enter your New Password' value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
            </div>
            <div className="row-1">
                    <button type="submit">CHANGE PASSWORD</button>
                    <Link to='/login'>Login</Link>
            </div>
        </form>

    </div>
  )
}

export default NewSubmit

/*

  <form>
        <div >
                <label htmlFor="otp">OTP</label>
                <input type="number" name="otp" id="otp" />
        </div>
        <div >
                <label htmlFor="password">New Password</label>
                <input type="password" name="password" id="password" />
        </div>
                <button type='submit'>Verify your email</button> <Link to="/">🛖</Link>
    </form> */