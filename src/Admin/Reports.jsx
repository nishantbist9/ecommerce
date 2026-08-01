import React from "react";

function Reports() {
  return (
    <div className="container mt-4">

      <h2 className="mb-4">Sales Reports</h2>

      {/* Summary Cards */}
      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card bg-primary text-white shadow">
            <div className="card-body text-center">
              <h5>Total Products</h5>
              <h2>120</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card bg-success text-white shadow">
            <div className="card-body text-center">
              <h5>Total Users</h5>
              <h2>85</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card bg-warning text-dark shadow">
            <div className="card-body text-center">
              <h5>Total Orders</h5>
              <h2>64</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card bg-danger text-white shadow">
            <div className="card-body text-center">
              <h5>Total Revenue</h5>
              <h2>Rs. 3,45,000</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Sales Report Table */}
      <div className="card shadow mt-4">

        <div className="card-header bg-dark text-white">
          <h4>Monthly Sales Report</h4>
        </div>

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-secondary">
              <tr>
                <th>Month</th>
                <th>Orders</th>
                <th>Revenue</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>January</td>
                <td>15</td>
                <td>Rs. 55,000</td>
              </tr>

              <tr>
                <td>February</td>
                <td>12</td>
                <td>Rs. 48,000</td>
              </tr>

              <tr>
                <td>March</td>
                <td>18</td>
                <td>Rs. 72,000</td>
              </tr>

              <tr>
                <td>April</td>
                <td>10</td>
                <td>Rs. 40,000</td>
              </tr>

              <tr>
                <td>May</td>
                <td>20</td>
                <td>Rs. 80,000</td>
              </tr>

              <tr>
                <td>June</td>
                <td>14</td>
                <td>Rs. 50,000</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Best Selling Product */}
      <div className="card shadow mt-4">

        <div className="card-header bg-success text-white">
          <h4>Best Selling Product</h4>
        </div>

        <div className="card-body">

          <h5>🏆 Steelbird SBA-7 Helmet</h5>

          <p>Total Sold: <strong>95 Units</strong></p>

          <p>Total Revenue: <strong>Rs. 3,32,500</strong></p>

        </div>

      </div>

    </div>
  );
}

export default Reports;