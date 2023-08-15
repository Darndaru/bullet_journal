import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
  const location = useLocation()
  const isSignIn = location.pathname === LOGIN_ROUTE

  return (
    <div className={"container"}>
      <div className={"auth"}>
        <h2>{isSignIn ? "Sign in" : "Sign up"}</h2>
        <form>
          <p className={"authInputLabel"}>Email</p>
          <input type={"email"}
                 placeholder={"niceass1999@gmail.com"}
                 className={"authInput"}/>
          {
            isSignIn ?
              <></>
              :
              <div style={{width: "100%", display: "flex",
                  flexDirection: "column"}}>
                <p className={"authInputLabel"}>Username</p>
                <input placeholder={"NiceAss"} className={"authInput"}/>
              </div>
          }
          <p className={"authInputLabel"}>Password</p>
          <input type={"password"} placeholder={"••••••••"} className={"authInput"}/>
          {
            isSignIn ?
              <button className={"authButton"}>Sign in</button>
              :
              <button className={"authButton"}>Sign up</button>
          }
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