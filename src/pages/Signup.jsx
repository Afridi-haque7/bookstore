import React, { useState } from 'react'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);


const SignupPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const auth = getAuth(app);

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((value) => console.log(value));
    };

  return (
    <div>
      <form className="signup-page">
        <label htmlFor="email">Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
          name="password"
        />
        <button onClick={createUser}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
