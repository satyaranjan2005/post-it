import React, { useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin= () =>{
    
    login();
  }
  return (
    <div className="login">
      <div className="login-card">
        <div className="login-left">
          <h1 className="login-left-h1">Hello World!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            repudiandae dolorum dicta explicabo maiores! Dolore vero eos optio
            atque laudantium ea id voluptate asperiores rerum, perferendis
            tempora quasi sapiente quo.
          </p>
          <span className="login-left-span">Don't you have a account?</span>
          <Link to="/register" >
          <button className="login-left-btn">Register</button>          
          </Link>
        </div>
        <div className="login-right">
          <h1 className="login-right-h1">Login</h1>
          <form action="" className="login-right-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="login-right-btn" type="submit" onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
