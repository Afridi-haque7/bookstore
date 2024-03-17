import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";


const auth =  getAuth(app);
const SigninPage = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((value) => {console.log("Signed in")})
        .catch((error) => {console.log(error)});
    };

  return (
    <div className="signin-page">
    <h1>Sign In Page</h1>
      <label htmlFor="email">Enter your email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
      />
      <label htmlFor="password">Enter your password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />
      <button onClick={signinUser} >Sign In</button>
    </div>
  );
};

export default SigninPage;
