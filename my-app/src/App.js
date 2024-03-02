import './App.css';
import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      if (username === "") {
        alert("Please fill the Username field.");
        document.getElementById("usernameInput").focus();
      } else if (password === "") {
        alert("Please fill the Password field.");
        document.getElementById("passwordInput").focus();
      }
      return;
    }

    if (username === "user" && password === "password") {
      setMessage("Welcome, user");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <p>{message}</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            id="usernameInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            id="passwordInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
