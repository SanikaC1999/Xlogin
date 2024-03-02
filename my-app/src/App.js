import React, { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef(null);
  const usernameInputRef = useRef(null);
  const [message , setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

      if (username === "") {
        alert("Please fill the Username field.");
        usernameInputRef.current.focus();
      } else if (password === "") {
        alert("Please fill the Password field.");
        passwordInputRef.current.focus();
      }

    if (username === "user" && password === "password") {
      setMessage("Welcome, user")
      alert("Welcome, user");
      setErrorMessage("");
      setAuthenticated(true);
    } else {
      setMessage("Invalid username or password")
      alert("Invalid username or password");
      setUsername("")
      setPassword("")
      setErrorMessage("Invalid username or password");
      setAuthenticated(false);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
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


