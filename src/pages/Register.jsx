import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

const RegisterPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goHome = useEffect(() => {
    navigate("/");
  });
  // useEffect(() => {
  //   if (firebase.isLoggedIn) {
  //     // navigate to home page
  //     navigate("/");
  //   }
  // }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing up...");
    const result = await firebase
      .signupUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Signup Successfull");
        goHome();
      });
    console.log("Successfull", result);
  };

  return (
    <div className="container mt-5">
      <Form className="border p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          Register
        </Button>
      </Form>
      <h3 className="my-5">OR</h3>
      <Button variant="danger" onClick={firebase.signinWithGoogle}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default RegisterPage;
