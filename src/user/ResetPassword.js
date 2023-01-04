import React from 'react'
import './auth.css'

function ResetPassword() {



    return (
        <div className="fg_pass">
            <h2>Reset Your Password</h2>

            <div className="row">


                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />

                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="password" name="confirmpassword" id="confirmpassword"/>

                <button >Reset Password</button>
            </div>
        </div>
    )
}

export default ResetPassword
