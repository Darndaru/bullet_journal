import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";

const Auth = () => {
  const location = useLocation()
  const isSignIn = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    if (isSignIn) {
      const response = await login(email, password)
      console.log(response)
      console.log("LOOOOOOGIN")
    } else {
      const response = await registration(email, password)
      console.log(response)
      console.log("Registration!!!!")
    }
  }

  return (
    <div className={"container"}>
      <div className={"auth"}>
        <h2>{isSignIn ? "Sign in" : "Sign up"}</h2>
        <form>
          <p className={"authInputLabel"}>Email</p>
          <input type={"email"}
                 placeholder={"your_email@gmail.com"}
                 className={"authInput"}
                 value={email}
                 onChange={e => setEmail(e.target.value)}
          />
          {
            isSignIn ?
              <></>
              :
              <div style={{
                width: "100%", display: "flex",
                flexDirection: "column"
              }}>
                <p className={"authInputLabel"}>Username</p>
                <input placeholder={"Username"} className={"authInput"}/>
              </div>
          }
          <p className={"authInputLabel"}>Password</p>
          <input
            type={"password"}
            placeholder={"••••••••"}
            className={"authInput"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={click} className={"authButton"}>{
            isSignIn ?
              "Sign in"
              :
              "Sign up"
          }</button>
          {
            isSignIn ?
              <div style={{marginBottom: "10px"}}>
                Don't have an account yet?
                {" "}<Link to={REGISTRATION_ROUTE}
                           className={"authAnotherButton"}>Sign up</Link>
              </div>
              :
              <div style={{marginBottom: "10px"}}>
                Already have an account?
                {" "}<Link to={LOGIN_ROUTE}
                           className={"authAnotherButton"}>Sign in</Link>
              </div>
          }

        </form>
      </div>
    </div>
  );
};

export default Auth;