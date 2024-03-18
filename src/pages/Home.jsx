import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, {useEffect} from "react";
import NavbarComponent from "../components/Navbar";

const HomePage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
      navigate("/register");
    };



  return (
    <div className="container">
        {/* <NavbarComponent /> */}
      <h1>Home Page</h1>
      <Button variant="primary" onClick={handleRegister}>Register</Button>
    </div>
  );
};

export default HomePage;
