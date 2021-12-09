import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth, signInWithEmailAndPassword, signInWithGoogle} from "../firebase.js";
import {useAuthState} from 'react-firebase-hooks/auth';
import '../css/LogIn.css';


function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) history.replace("/dutytracker"); //CHECK DASHBOARD COMPONENT
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@email.com" />

        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"/>
          <div className="inline-box">
            <button
              className="btn-blue"
              onClick={() => signInWithEmailAndPassword(email, password)}>
              Login
            </button>
            {/* <button className="btn-blue" onClick={signInWithGoogle}>
              Login with Google
            </button> */}
          </div>
        <div>
          Don't have an accout? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
};

export default LogIn;
