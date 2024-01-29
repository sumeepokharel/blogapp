import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../components/PostList.module.css";

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

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate(); // Create navigate function for navigation

  const handleLogin = async () => {
    try {
      const response = await axios.get<User[]>("http://localhost:3001/users");
      console.log("Server Response", response.data);
      const data = response.data;

      const user = data.find(
        (u: User) => u.username === username && u.password === password
      );

      if (user) {
        console.log("Login successful", user);
        setError("");
        setLoggedIn(true);

        navigate("/Posts");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login", error);
      setError("Error during login");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Please Log in with your credentials</h2>
      <div>
        <label className={styles.label}>
          Username:
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin} className={styles.button}>
        Login
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoggedIn && <p style={{ color: "green" }}>Login successful!</p>}
    </div>
  );
};

export default LoginPage;
