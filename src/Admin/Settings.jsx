import React, { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    shopName: "Helmet & Safety Gear Shop",
    ownerName: "Admin",
    email: "admin@gmail.com",
    phone: "9800000000",
    address: "Lalitpur, Nepal",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      settings.password !== "" &&
      settings.password !== settings.confirmPassword
    ) {
      alert("Passwords do not match!");
      return;
    }

    alert("Settings Updated Successfully!");
    console.log(settings);
  };

  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3>Admin Settings</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Shop Name</label>
              <input
                type="text"
                className="form-control"
                name="shopName"
                value={settings.shopName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-control"
                name="ownerName"
                value={settings.ownerName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={settings.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Shop Address</label>
              <textarea
                className="form-control"
                rows="3"
                name="address"
                value={settings.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <hr />

            <h5>Change Password (Optional)</h5>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={settings.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={settings.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Save Settings
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Settings;