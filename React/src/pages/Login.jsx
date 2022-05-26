import React from "react";
import { signInWithPopup } from "firebase/auth";
import { Auth, Provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const Navigate = useNavigate();
  const SignInWithGoogle = () => {
    signInWithPopup(Auth, Provider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      Navigate("/");
    })
  }
  return (
    <div>
      <div className="home_1">
        <div className="home_2">
          <div className="home_3"><h3>Login</h3></div>
          <h4>Please login with your Google account to continue.</h4>
          <div className="home_4">
            <button className="login-with-google-btn" onClick={SignInWithGoogle}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="home_0"></div>
    </div>
  );
}

export default Login;
