import React from "react";
import { Link } from "react-router-dom";

function UserSidebar() {
  return (
    <div
      className="bg-light border-end p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
      <h4 className="mb-4">User Menu</h4>

      <div className="list-group">

        <Link
          to="/user-dashboard"
          className="list-group-item list-group-item-action"
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/products"
          className="list-group-item list-group-item-action"
        >
          🪖 Products
        </Link>

        <Link
          to="/cart"
          className="list-group-item list-group-item-action"
        >
          🛒 Cart
        </Link>

        <Link
          to="/wishlist"
          className="list-group-item list-group-item-action"
        >
          ❤️ Wishlist
        </Link>

        <Link
          to="/orders"
          className="list-group-item list-group-item-action"
        >
          📦 My Orders
        </Link>

        <Link
          to="/profile"
          className="list-group-item list-group-item-action"
        >
          👤 Profile
        </Link>

      </div>
    </div>
  );
}

export default UserSidebar;