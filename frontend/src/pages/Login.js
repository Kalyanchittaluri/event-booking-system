import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      alert("Login Successful");

      // Redirect to Home
      window.location.href = "/";
      
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
      <div style={{ width: "350px", background: "#1a1a1d", padding: "30px", borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center", color: "#4c8bf5" }}>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "20px", padding: "10px" }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            background: "#4c8bf5",
            border: "none",
            padding: "10px",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
