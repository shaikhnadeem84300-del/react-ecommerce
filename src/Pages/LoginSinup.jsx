import React from 'react'
import "./CSS/LoginSinup.css"

const LoginSinup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login</span>
          <div className="loginsingup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the agree to the terms of use & privacy policy.</p>
          </div>
        </p>
      </div>
    </div>
  )
}

export default LoginSinup