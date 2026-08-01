import React, { useState } from "react";

function MyOrders() {
  const [orders] = useState([
    {
      id: 1001,
      date: "2026-07-01",
      product: "Steelbird SBA-7 Helmet",
      amount: 3500,
      payment: "Khalti",
      status: "Delivered",
    },
    {
      id: 1002,
      date: "2026-07-02",
      product: "Rynox Gloves",
      amount: 2500,
      payment: "Cash on Delivery",
      status: "Shipped",
    },
    {
      id: 1003,
      date: "2026-07-03",
      product: "LS2 Helmet",
      amount: 9500,
      payment: "Khalti",
      status: "Pending",
    },
  ]);

  return (
    <div className="container mt-4">

      <h2 className="mb-4">📦 My Orders</h2>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>{order.date}</td>

                  <td>{order.product}</td>

                  <td>Rs. {order.amount}</td>

                  <td>{order.payment}</td>

                  <td>
                    <span
                      className={`badge ${
                        order.status === "Delivered"
                          ? "bg-success"
                          : order.status === "Shipped"
                          ? "bg-primary"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>

                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => alert("Order Details")}
                    >
                      View
                    </button>

                    {order.status === "Pending" && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => alert("Order Cancelled")}
                      >
                        Cancel
                      </button>
                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default MyOrders;