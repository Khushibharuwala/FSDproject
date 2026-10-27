import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks";
import "./Login.css";

function Login() {
  usePageTitle("SkillConnect - Login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    alert("Login Successful!");
    console.log("Email:", email);
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setRemember(false);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="logo">
          <i className="fa-solid fa-users"></i>
          <h1>SkillConnect</h1>
        </div>

        <h2>Login</h2>

        <p className="subtitle">Welcome back! Please login to continue.</p>

        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="input-box">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <i className="fa-solid fa-lock"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} eye`}
              onClick={() => setShowPassword((v) => !v)}
            ></i>
          </div>

          <div className="remember">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember Me
            </label>

            <a href="#" className="forgot">
              Forgot Password?
            </a>
          </div>

          <div className="buttons">
            <input type="submit" value="Login" className="login-btn" />
            <input type="reset" value="Clear" className="clear-btn" />
          </div>
        </form>

        <div className="register">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
