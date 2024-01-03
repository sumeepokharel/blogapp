import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  interface User {
    id: number;
    username: string;
    password: string;
    profile: {
      name: string;
      location: string;
      education: string;
    };
  }
  const handleLogin = async () => {
    try {
      const response = await axios.get(".././../db.json");
      console.log("Server Response", response.data);
      const data = response.data;

      const user = data.users.find(
        (u: User) => u.username === username && u.password === password
      );

      if (user) {
        // Authentication successful, you can redirect or set a token here
        console.log("Login successful", user);
        setError("");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login", error);
      setError("Error during login");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
