import React from 'react'
import '../compnents/styles/Login.css'
import { useNavigate } from 'react-router-dom'
import Signup from './Signup'
import { useState } from 'react'
const Login = ({handleLoggedIn}) => {
    const navigate = useNavigate();
	const userEmail = 'ammad@gmail.com';
	const userPsw = '12345678';
	const [email, setEmail] = useState(null);
	const [psw, setPsw] = useState(null);
	const [loginError, setLoginError] = useState(false);
	const handleEmailChange = e => {
		setEmail(e.target.value);
	}
	const handlePswChange = e => {
		setPsw(e.target.value);
	}
	const handleLogIn = (e) => {
		// e.preventDefault();
		// if(email == userEmail && psw == userPsw){
		// 	handleLoggedIn(e);
		// 	navigate("/Products")
		// }
		// else{
		// 	setLoginError(true);
		// 	setEmail("");
		// 	setPsw("");
		// }
		handleLoggedIn(e);
		 	navigate("/Products")

		
	}
  return (
    <div>
        <div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-26">
						Welcome Admin
					</span>
					<span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input
						 className="input100"
						 type="text" 
						 name="email"
						 value = {email}
						 onChange = {(e => handleEmailChange(e))}
						 />
						<span className="focus-input100" data-placeholder="Email"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input 
						 className="input100"
						 type="password"
						 name="pass"
						 value = {psw}
						 onChange = {(e => handlePswChange(e))}
						 />
						<span className="focus-input100" data-placeholder="Password"></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" onClick={(e) => handleLogIn(e)}>
								Login
							</button>
						</div>
						{loginError == true? <label className='error text-danger'>Wrong email password</label>: ""}
					</div>

					<div className="text-center p-t-115">
						<span className="txt1">
							Don’t have an account?
						</span>

						<a className="txt2" href="#" onClick={navigate("/Signup")}>
							Sign Up
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    
  )
}

export default Login