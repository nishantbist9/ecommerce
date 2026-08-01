import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <Link className="navbar-brand fw-bold" to="/admin-dashboard">
          🛡️ Admin Panel
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/admin-dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin/orders">
                Orders
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin/users">
                Users
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin/reports">
                Reports
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin/settings">
                Settings
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-danger ms-2" to="/login">
                Logout
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;