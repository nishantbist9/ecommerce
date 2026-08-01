import React, { useState } from "react";

function ManageOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Nishant Bista",
      product: "Steelbird SBA-7 Helmet",
      amount: 3500,
      payment: "Paid",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Anjali Khadka",
      product: "Rynox Gloves",
      amount: 2500,
      payment: "Paid",
      status: "Shipped",
    },
    {
      id: 3,
      customer: "Ram Sharma",
      product: "LS2 Helmet",
      amount: 9500,
      payment: "Pending",
      status: "Pending",
    },
  ]);

  const updateStatus = (id, status) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Manage Orders</h2>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th width="220">Action</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>{order.customer}</td>

                  <td>{order.product}</td>

                  <td>Rs. {order.amount}</td>

                  <td>
                    <span
                      className={`badge ${
                        order.payment === "Paid"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {order.payment}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        order.status === "Pending"
                          ? "bg-warning text-dark"
                          : order.status === "Shipped"
                          ? "bg-info"
                          : "bg-success"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>

                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() =>
                        updateStatus(order.id, "Delivered")
                      }
                    >
                      Deliver
                    </button>

                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() =>
                        updateStatus(order.id, "Shipped")
                      }
                    >
                      Ship
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        updateStatus(order.id, "Cancelled")
                      }
                    >
                      Cancel
                    </button>

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

export default ManageOrders;