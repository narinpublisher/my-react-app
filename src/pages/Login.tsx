//  📁 src/pages/Login.tsx

import { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name) return;
    login(name);
    navigate("/posts");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Page</h2>

      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}