import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../component/AdminNavbar";
import AdminSidebar from "../component/AdminSidebar";

function AdminDashboard() {
  return (
    <>
      {/* Navbar */}
      <AdminNavbar />

      <div className="d-flex">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="container-fluid p-4">

          <h2 className="mb-4">🛡️ Admin Dashboard</h2>

          <div className="row">

            {/* Products */}
            <div className="col-md-3 mb-4">
              <div className="card shadow text-center p-3">
                <h4>📦 Products</h4>
                <p>Manage all products</p>
                <Link to="/admin/products" className="btn btn-primary">
                  Manage
                </Link>
              </div>
            </div>

            {/* Add Product */}
            <div className="col-md-3 mb-4">
              <div className="card shadow text-center p-3">
                <h4>➕ Add Product</h4>
                <p>Add new helmets or safety gears</p>
                <Link to="/admin/add-product" className="btn btn-success">
                  Add Product
                </Link>
              </div>
            </div>

            {/* Orders */}
            <div className="col-md-3 mb-4">
              <div className="card shadow text-center p-3">
                <h4>🛒 Orders</h4>
                <p>View customer orders</p>
                <Link to="/admin/orders" className="btn btn-warning">
                  Orders
                </Link>
              </div>
            </div>

            {/* Users */}
            <div className="col-md-3 mb-4">
              <div className="card shadow text-center p-3">
                <h4>👥 Users</h4>
                <p>Manage registered users</p>
                <Link to="/admin/users" className="btn btn-info">
                  Users
                </Link>
              </div>
            </div>

            {/* Categories */}
            <div className="col-md-3 mb-4">
              <div className="card shadow text-center p-3">
                <h4>📂 Categories</h4>
                <p>Manage product categories</p>
                <Link to="/admin/categories" className="btn btn-secondary">
                  Categories
                </Link>
              </div>
            </div>

            {/* Payments */}
            <div className="col-md-3 mb-4">
              <div className="card shadow text-center p-3">
                <h4>💳 Payments</h4>
                <p>View payment history</p>
                <Link to="/admin/payments" className="btn btn-dark">
                  Payments
                </Link>
              </div>
            </div>

            {/* Reports */}
            <div className="col-md-3 mb-4">
              <div className="card shadow text-center p-3">
                <h4>📈 Reports</h4>
                <p>Sales and order reports</p>
                <Link to="/admin/reports" className="btn btn-danger">
                  Reports
                </Link>
              </div>
            </div>

            {/* Settings */}
            <div className="col-md-3 mb-4">
              <div className="card shadow text-center p-3">
                <h4>⚙️ Settings</h4>
                <p>Update admin settings</p>
                <Link to="/admin/settings" className="btn btn-primary">
                  Settings
                </Link>
              </div>
            </div>

          </div>

          {/* Dashboard Summary */}
          <div className="row mt-4">

            <div className="col-md-3">
              <div className="card bg-primary text-white text-center p-3">
                <h5>Total Products</h5>
                <h2>120</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-success text-white text-center p-3">
                <h5>Total Orders</h5>
                <h2>85</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-warning text-dark text-center p-3">
                <h5>Total Users</h5>
                <h2>50</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-danger text-white text-center p-3">
                <h5>Total Sales</h5>
                <h2>Rs. 1,25,000</h2>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;