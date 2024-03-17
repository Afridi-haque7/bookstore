import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

const LoginPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(firebase.isLoggedIn) {
        // navigate to home page
        navigate("/")
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Signing up...");
    const result = await firebase
      .loginWithEmailAndPassword(email, password)
      .then(() => {
        alert("Logged in");
      })
      .catch((error) => {
        console.log(error);
        return (
            <div className="h-100vh">
                <h2>Something Went wrong</h2>
            </div>
        );
      });
    console.log("Successfull", result);
  };

  return (
    <div className="container mt-5 border p-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <h3 className="my-5">OR</h3>
      <Button variant="danger" onClick={firebase.signinWithGoogle}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default LoginPage;
