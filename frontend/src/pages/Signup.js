import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await axios.post("http://localhost:5000/api/auth/signup", {
      name, email, password,
    });
    alert("Signup Successful");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
      <div style={{ width: "350px", background: "#1a1a1d", padding: "30px", borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center", color: "#4c8bf5" }}>Create Account</h2>

        <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={signup}>Signup</button>
      </div>
    </div>
  );
}
