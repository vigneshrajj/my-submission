import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const userList = JSON.parse(localStorage.getItem("users"));

    if (
      userList &&
      userList.some(
        (user) => user.email === email && user.password === password
      )
    ) {
      localStorage.setItem("isAuth", "authenticated");
      history.push("/users");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="heading">Welcome back!</h1>
      <h3 className="sub-heading">Please login to your account.</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <div className="form-extras-container">
          <div className="remember-me">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <Link to="/forgot-password" className="forgot-password">
            <p>Forgot Password</p>
          </Link>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      <div className="terms-and-privacy-container">
        <p className="terms-of-use">Terms of use</p>
        <p className="privacy-policy">Privacy policy</p>
      </div>
    </div>
  );
};

export default Login;
