import React, { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    firstName: "Nishant",
    lastName: "Bista",
    email: "nishant@gmail.com",
    phone: "9801234567",
    address: "Lalitpur, Nepal",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.password !== "" &&
      user.password !== user.confirmPassword
    ) {
      alert("Passwords do not match!");
      return;
    }

    alert("Profile Updated Successfully!");
    console.log(user);
  };

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3>👤 My Profile</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                rows="3"
                name="address"
                value={user.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <hr />

            <h5>Change Password</h5>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-success w-100">
              Save Changes
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Profile;