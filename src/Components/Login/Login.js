import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/loginSlice";
import { auth, provider } from "../../Firebase/Firebase";

function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);

  const handleAuth = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).then((data) =>
      dispatch(
        login({
          name: data?.user.displayName,
          email: data?.user.email,
          loggedIn: true,
          username: data?.user.displayName,
          avatar: data?.user.photoURL,
        })
      )
    );
  };

  return (
    <>
      <div className="login__container">
        <form className="login">
          <h3 className="heading">Login 👇</h3>

          <button onClick={(e) => handleAuth(e)}>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
