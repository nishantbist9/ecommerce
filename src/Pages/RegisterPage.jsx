import { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";

function RegisterPage() {
 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  phone: "",
  password: ""
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData
    );

    alert(res.data.message);

    console.log(res.data);

  } catch (error) {
    alert(error.response?.data?.message || "Registration Failed");
  }
};

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2>Register</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

        <input
  type="text"
  name="phone"
  placeholder="Contact Number"
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

          <button type="submit">Register</button>
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
  }
};

export default RegisterPage;