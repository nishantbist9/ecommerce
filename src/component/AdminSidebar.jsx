import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "260px",
        minHeight: "100vh",
      }}
    >
      <h3 className="text-center mb-4">
        🛡️ Admin Panel
      </h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin-dashboard">
            📊 Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/add-product">
            ➕ Add Product
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/products">
            📦 Manage Products
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/orders">
            🛒 Manage Orders
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/users">
            👥 Manage Users
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/categories">
            📂 Categories
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/payments">
            💳 Payments
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/reports">
            📈 Reports
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/settings">
            ⚙️ Settings
          </Link>
        </li>

        <hr className="text-light" />

        <li className="nav-item">
          <Link className="btn btn-danger w-100" to="/login">
            🚪 Logout
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default AdminSidebar;