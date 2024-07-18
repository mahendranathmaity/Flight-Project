import React from 'react'
import { useContext, useState } from "react"
// import { FlightContext } from "../context/FlightContext"
import {Link, useNavigate } from "react-router-dom"
// import { Button } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { register } from "../redux/authSlice";


const SignUp = () => {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  // const { userdata, setUserdata } = useContext(FlightContext);
  const [message, setMessage] = useState("");


  const EyeIcon = () => {
    setShowPassword(!showPassword)
  }
  // const findUserByEmail = (email) => {
  //   for (let i = 0; i < userdata.length; i++) {
  //     const user = userdata[i];
  //     if (user.email === email) {
  //       return true;
  //     }
  //   }
  // };
  const handleSignUp = async () => {
    let isValid = (true)
    if (!name) {
      isValid = false
      setNameError("Name is required")
    }
    if (!email) {
      isValid = false;
      setEmailError("Email is Required");
    }
    if (!phone) {
      isValid = false
      setPhoneError("Phone is required")
    }
    if (!password) {
      isValid = false
      setPasswordError("Please Password is required")
    }
    // if (isValid) {
    //   let newUserEmail = findUserByEmail(email);
    //   if (newUserEmail) {
    //     setMessage("A User with this Email Id already Signed Up");
    //   } else {
    //     setUserdata((currentUserData) => {
    //       let newuser = {};
    //       newuser.id = currentUserData.length + 1;
    //       newuser.name = name;
    //       newuser.email = email;
    //       newuser.phone = phone;
    //       newuser.password = password;

    //       currentUserData.push(newuser);
    //       goTo("/login-page");
    //       return currentUserData;
    //     });
    //     clearRegisterForm();
    //   }
    // }
    if (isValid) {
      let newUser = {};
      newUser.name = name;
      newUser.email = email;
      newUser.phone = phone;
      newUser.password = password;
      try {
        await dispatch(register(newUser)).unwrap();
        goTo("/auth/login");
        clearRegisterForm();
      } catch (error) {
        console.log(error);
      }

    }
  }
  const clearRegisterForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setMessage("");
  };
  const navigate = useNavigate()
  const dispatch = useDispatch();

  // function goToLogin() {
  //   goTo("/login-page")
  // }
  function goTo(path) {
    navigate(path)
  }
  return (
    <div className="Container">
      <div className="form">
        <h1><u> SignUp-Page </u></h1>
        <div className="form-group">
          <input type="text" placeholder="Enter Your Name" onChange={(event) => {
            setName(event.target.value)
            setNameError("")
          }} value={name}
          />
          <div className="name-error">{nameError}</div>

        </div><br />
        <div className="form-group">
          <input type="text" placeholder="Enter Your Email" onChange={(event) => {
            setEmail(event.target.value)
            setEmailError("")
          }} value={email}
          />
          <div className="email-error">{emailError}</div>

        </div><br />

        <div className="form-group">
          <input type="text" placeholder="Enter Your Phone" onChange={(event) => {
            setPhone(event.target.value)
            setPhoneError("")
            setMessage("");
          }} value={phone}
          />
          <div className="phone-error">{phoneError}</div>

        </div><br />
        <div className="form-group">
          <input type={showPassword ? "text" : "password"} placeholder="Enter Your Password" onChange={(event) => {
            setPassword(event.target.value)
            setPasswordError("")
          }} value={password}
          />
          <button className="icon" onClick={EyeIcon}>
            {showPassword}
          </button>
          <div className="password-error">{passwordError}</div>
          <div>{message}</div>

        </div><br />
        <button onClick={handleSignUp}>Submit</button>
        <div className="press">or</div>

        {/* <Button className="btn btn-primary" onClick={(e) => { goToLogin(e) }}>Login</Button> */}
        <p>
          Already Have An Account? <Link to="/auth/login">Log In</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp









