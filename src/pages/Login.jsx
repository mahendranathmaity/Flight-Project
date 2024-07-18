import React from 'react'
import { useContext, useState } from "react"
import { Button } from 'react-bootstrap';
import { FlightContext } from "../context/FlightContext";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { userdata, setUserdata } = useContext(FlightContext);

  const EyeIcon = () => {
    setShowPassword(!showPassword)
  }

  const submitHandler = () => {
    let isValid = (true)

    if (!email) {
      isValid = false
      setEmailError("Email is required")
    }
    if (!password) {
      isValid = false
      setPasswordError("Password is required")
    }
    if (isValid) {
      const userByEmail = userdata.find((user) => {
        if (user.email === email) {
          return true;
        }
      })
      const userByPassword = () => {
        if (userByEmail) {
          if (password === userByEmail.password) {
            return true;
          }
        }
      };
      if (!userByEmail) {
        setEmailError(
          "This your Email Id associated with that email id"
        );
      }
      if (!userByPassword()) {
        setPasswordError("Wrong Password! Please check your password.");
      }

      if (userByEmail && userByPassword()) {
        dispatch(login());
        setUserdata(userByEmail.id);
        goTo("/home-page"); // actually need to pass the id of an user
      }
    }
  }
  const navigate = useNavigate()
  const dispatch = useDispatch();

  function gotoSignUp() {
    goTo("/signup-page")
  }
  function goTo(path) {
    navigate(path)
  }

  return (
    <div className="Container">
      <div className="form">
        <h1><u> Login-page </u></h1>

        <div className="form-group">
          <input type="text" placeholder="Enter Your Email" onChange={(event) => {
            setEmail(event.target.value)
            setEmailError("")
          }} value={email}
          />
          <div className="email-error">{emailError}</div>

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

        </div><br />
        <button onClick={submitHandler}>Submit</button>
        <div className="press">or</div>

        <Button variant="primary" onClick={gotoSignUp}>SignUp</Button>

      </div>
    </div>
  )
}

export default Login
