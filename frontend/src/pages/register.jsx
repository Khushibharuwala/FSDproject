import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks";
import "./Register.css";

function Register() {
  usePageTitle("SkillConnect Register");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful!");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      alert("Could not connect to the backend server!");
    }
  };

  const passwordType = showPassword ? "text" : "password";

  return (
    <div className="register-page">
      <div className="card">
        <div className="logo">
          <i className="fa-solid fa-users"></i>
          <h2>SkillConnect</h2>
        </div>

        <h1>Create Account</h1>

        <p>Join SkillConnect and start hiring or working.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <i className="fa-solid fa-lock"></i>
            <input
              type={passwordType}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} eye`}
              onClick={() => setShowPassword((v) => !v)}
            ></i>
          </div>

          <div className="input-box">
            <i className="fa-solid fa-lock"></i>
            <input
              type={passwordType}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Create Account</button>
        </form>

        <div className="bottom">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
