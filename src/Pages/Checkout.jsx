import React, { useState } from "react";

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const totalAmount = 8500;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order Placed Successfully!");

    console.log(formData);
  };

  return (
    <div className="container mt-5">

      <div className="row">

        {/* Billing Details */}

        <div className="col-md-7">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">
              <h3>Billing Details</h3>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Delivery Address</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Payment Method</label>

                  <select
                    className="form-select"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                  >
                    <option>Cash on Delivery</option>
                    <option>Khalti</option>
                  </select>

                </div>

                <button className="btn btn-success w-100">
                  Place Order
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Order Summary */}

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-header bg-dark text-white">
              <h3>Order Summary</h3>
            </div>

            <div className="card-body">

              <table className="table">

                <tbody>

                  <tr>
                    <td>Steelbird Helmet</td>
                    <td>Rs. 3500</td>
                  </tr>

                  <tr>
                    <td>Rynox Gloves</td>
                    <td>Rs. 5000</td>
                  </tr>

                  <tr>
                    <td>Shipping</td>
                    <td>Rs. 0</td>
                  </tr>

                  <tr className="table-success">
                    <th>Total</th>
                    <th>Rs. {totalAmount}</th>
                  </tr>

                </tbody>

              </table>

              <hr />

              <h5 className="text-success">
                ✔ Secure Checkout
              </h5>

              <p>
                Your payment information is safe and secure.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;