import React, { useState, useRef } from "react";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setError("")
      setIsSubmitted(true)
    } else {
      setError("Invalid username or password")
      setIsSubmitted(false)
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {
        isSubmitted ? (<div>
          <p>Welcome, {username}</p>
          </div>) :
        (<form className="login-form" onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
        <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          </div>
          <div>
        <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
        <input type="submit" value="Login" />
      </form>)}
    </div>
  );
}


