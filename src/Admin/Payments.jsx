import React, { useState } from "react";

function Payments() {
  const [payments] = useState([
    {
      id: 1001,
      customer: "Nishant Bista",
      product: "Steelbird SBA-7 Helmet",
      amount: 3500,
      method: "Khalti",
      status: "Paid",
      date: "2026-07-03",
    },
    {
      id: 1002,
      customer: "Anjali Khadka",
      product: "Rynox Gloves",
      amount: 2500,
      method: "Cash on Delivery",
      status: "Pending",
      date: "2026-07-02",
    },
    {
      id: 1003,
      customer: "Ram Sharma",
      product: "LS2 Helmet",
      amount: 9500,
      method: "Khalti",
      status: "Paid",
      date: "2026-07-01",
    },
  ]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Payment History</h2>

      <div className="card shadow">
        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>Payment ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              {payments.map((payment) => (

                <tr key={payment.id}>

                  <td>{payment.id}</td>

                  <td>{payment.customer}</td>

                  <td>{payment.product}</td>

                  <td>Rs. {payment.amount}</td>

                  <td>{payment.method}</td>

                  <td>
                    <span
                      className={`badge ${
                        payment.status === "Paid"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>

                  <td>{payment.date}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
}

export default Payments;