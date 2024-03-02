import React, { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef(null);
  const [message , setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      if (username === "") {
        alert("Please fill the Username field.");
      } else if (password === "") {
        alert("Please fill the Password field.");
        passwordInputRef.current.focus();
      }
      return;
    }

    if (username === "user" && password === "password") {
      setMessage("Welcome, user")
      alert("Welcome, user");
    } else {
      setMessage("Invalid username or password")
      alert("Invalid username or password");
      setUsername("")
      setPassword("")
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
            ref={passwordInputRef}
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


