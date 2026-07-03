import { useState } from "react";
import Navbar from "../component/Navbar";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    console.log(loginData);
  };

  const handleForgotPassword = () => {
    alert("Redirect to Forgot Password page");
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <p
            style={styles.forgotPassword}
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </p>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "auto",
    gap: "15px"
  },

  forgotPassword: {
    color: "blue",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "right",
    margin: "0"
  }
};

export default LoginPage;