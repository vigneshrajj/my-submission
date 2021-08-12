import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    let userList = JSON.parse(localStorage.getItem("users"));
    if (userList) {
      userList.push({
        name,
        email,
        mobile,
        password
      });
    } else {
      userList = [
        {
          name,
          email,
          mobile,
          password
        }
      ];
    }
    localStorage.setItem("isAuth", "authenticated");
    localStorage.setItem("users", JSON.stringify(userList));
    history.push("/users");
  };
  return (
    <div className="signup-container">
      <h1 className="heading">Welcome</h1>
      <h3 className="sub-heading">Please create a new account.</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          pattern="[a-zA-Z ]+"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          pattern="^[0-9]+$"
          maxLength="10"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <input
          type="email"
          pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          minlength="8"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <button className="signup-btn" type="submit">
          Signup
        </button>
      </form>
      <div className="terms-and-privacy-container">
        <p className="terms-of-use">Terms of use</p>
        <p className="privacy-policy">Privacy policy</p>
      </div>
    </div>
  );
};

export default Signup;
