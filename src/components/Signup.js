import React, { useState } from "react";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signup-input"
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      {error && <p className="signup-error">{error}</p>}
    </div>
  );
};

export default Signup;
