import React from 'react'
import '../compnents/styles/Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import { getUsersArr } from './usersArr'
import Login from './Login'
//toast.configure();
const Signup = () => {
	const navigate = useNavigate();
	const [usersArr, setUsersArr] = useState([]);
	const [userName, setuserName] = useState("");
	const [email, setemail] = useState("");
	const [psw, setpsw] = useState("");
	const unique_id = uuid();
	var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
	var regexPsw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	const [emailError, setemailError] = useState(false)
	const [pswError, setpswError] = useState(false)
	const notify = () => {
		//toast.success('Signed up!', {autoClose:3000})
	}
	const handleEmailChange = e => {
		setemail(e.target.value)
	}
	const handleUsernameChange = e => {
		setuserName(e.target.value)
	}
	const handlePswChange = e => {
		setpsw(e.target.value)
	}
	const handleRegister = (e) => {
		e.preventDefault();

		const obj = {
			id: unique_id,
			userName,
			email,
			psw
		}
		// if (userName.length > 0 && email.length > 0 && psw.length > 0) {
		// 	if (!regexEmail.test(email)) {
		// 		setemailError(true)
		// 		console.log("Email error from else: " + emailError);
				
		// 	}
		// 	// while(!regexEmail.test(email)){
		// 	// 	setemailError(true)
		// 	// 	console.log("Email error from else: " + emailError);
		// 	// }
		// 	if (!regexPsw.test(psw)) {
		// 		setpswError(true)
		// 		console.log("Psw error from if: " + pswError)
				
		// 	}
		// 	// while(!regexPsw.test(psw)){
		// 	// 	setpswError(true)
		// 	// 	console.log("Psw error from if: " + pswError)
		// 	// }
		// 	if(emailError || pswError){
		// 		return
		// 	}
		// 	else if(!emailError && !pswError){
		// 		console.log("Succesfull!")
		// 		setUsersArr([
		// 			...usersArr,
		// 			usersArr.push(obj)
		// 		]);
		// 		notify();
		// 		navigate("/");
		// 	}
		// 	else{
		// 		console.log("return")
		// 	}
		// 	// setUsersArr([
		// 	// 	...usersArr,
		// 	// 	usersArr.push(obj)
		// 	// ]);
		// 	// notify();
		// 	// navigate("/");


		// 	// else if(emailError === false && pswError === false){

		// 	// }


		// }
		// else {
		// 	console.log('error......!');
		// }
		// console.log(usersArr);
		navigate("/");
	}
	return (
		<div>

			<div className="container-login100">
				<div className="wrap-login100">
					<form className="login100-form validate-form">
						<span className="login100-form-title p-b-26">
							Sign up
						</span>
						<span className="login100-form-title p-b-48">
							<i className="zmdi zmdi-font"></i>
						</span>
						<div className="wrap-input100 validate-input" >
							<input
								required
								className="input100"
								type="text"
								name="usename"
								value={userName}
								onChange={e => handleUsernameChange(e)}
							/>
							<span className="focus-input100" data-placeholder="Username"></span>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
							<input
								required
								className="input100"
								type="text"
								name="email"
								value={email}
								onChange={e => handleEmailChange(e)}
							/>
							<span className="focus-input100" data-placeholder="Email"></span>

						</div>
						{/* <div class="form-floating mb-3">
							<input type="email" name="email"
								value={email}
								onChange={e => handleEmailChange(e)} />
							<label for="floatingInput">Email address</label>
						</div> */}
						{emailError == true ? <label className='text-danger'>Invalid email</label> : ''}

						<div className="wrap-input100 validate-input" data-validate="Enter password">
							<span className="btn-show-pass">
								<i className="zmdi zmdi-eye"></i>
							</span>
							<input
								required
								className="input100"
								type="password"
								name="pass"
								value={psw}
								onChange={e => handlePswChange(e)}
							/>
							<span className="focus-input100" data-placeholder="Password"></span>

						</div>
						{pswError == true ? <label className='text-danger'>Password should must contain an uppercase & lowercase letter, a number, a special character and 8 characters long</label> : ''}
						<div className="container-login100-form-btn">
							<div className="wrap-login100-form-btn">
								<div className="login100-form-bgbtn"></div>
								<button className="login100-form-btn" onClick={e => handleRegister(e)}>
									Register
								</button>
							</div>
						</div>

						<div className="text-center p-t-115">
							<span className="txt1">
								Do you already have an account?
							</span>
							{/* <button onClick={navigate("/")}>Login</button> */}
							<a className="txt2" href="#" onClick={() => navigate("/")}>
								Log in
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup