import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import axios from "axios";


function LoginPage() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      loginData
    );

    alert(res.data.message);

    // Save token and user
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.user.role);

    const role = res.data.user.role;

    // Redirect based on role
    if (role === "admin") {
  navigate("/admin-dashboard");
} else {
  navigate("/user-dashboard");
}

  } catch (error) {
    alert(error.response?.data?.message || "Login failed");
  }
};
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">

          <div className="col-md-5">

            <div className="card shadow">

              <div className="card-header bg-primary text-white text-center">
                <h3>Login</h3>
              </div>

              <div className="card-body">

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={loginData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={loginData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100"
                  >
                    Login
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default LoginPage;