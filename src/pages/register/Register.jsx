import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="register-card">
        <div className="register-left">
        <h1 className='register-left-h1'>Register</h1>
          <form action="" className='register-left-form'>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder="Password" />
            <button className='register-left-btn'>Register</button>
          </form>
        </div>
        <div className="register-right">
        <h1 className='register-right-h1'>Post It</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            repudiandae dolorum dicta explicabo maiores! Dolore vero eos optio
            atque laudantium ea id voluptate asperiores rerum, perferendis
            tempora quasi sapiente quo.
          </p>
          <span className='register-right-span'>Do you have a account?</span>
          <Link to="/login">
          <button className='register-right-btn'>Login</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Register
