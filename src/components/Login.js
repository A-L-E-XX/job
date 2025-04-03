import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {error && <p className="login-error">{error}</p>}
      <p className="signup-text">
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default Login;
