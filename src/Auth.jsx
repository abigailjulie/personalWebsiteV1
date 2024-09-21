import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import TextRotator from "./components/TextRotator";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const Auth = ({ onAuthenticated }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_APP_PASSWORD) {
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("lastActivity", Date.now().toString());
      onAuthenticated();
      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    } else {
      setError("Incorrect password");
      toast.error("Try Again!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };

  return (
    <div className="loginContainer">
      <div className="login">
        <div className="welcome">
          <h1 className="greeting">Welcome!</h1>
          <TextRotator toRotate={["Glad you're here :)"]} period={200} />
        </div>
          <Form onSubmit={handleLogin} className="input-box">
          <InputGroup className="loginInput mb-3">
            <Form.Control
              type="password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <Button variant="outline-secondary" id="enterBtn" type="submit">
              Enter
            </Button>
          </InputGroup>
          </Form>
      </div>
    </div>
  );
};

export default Auth;