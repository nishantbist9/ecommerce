import React, { useState } from "react";
import { Link } from "react-router-dom";

function ManageProducts() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Steelbird SBA-7 Helmet",
      category: "Helmet",
      brand: "Steelbird",
      price: 3500,
      stock: 10,
    },
    {
      id: 2,
      name: "Rynox Gloves",
      category: "Gloves",
      brand: "Rynox",
      price: 2500,
      stock: 15,
    },
    {
      id: 3,
      name: "LS2 Helmet",
      category: "Helmet",
      brand: "LS2",
      price: 9500,
      stock: 5,
    },
  ]);

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Manage Products</h2>

        <Link to="/admin/add-product" className="btn btn-success">
          + Add Product
        </Link>
      </div>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Stock</th>
                <th width="180">Action</th>
              </tr>
            </thead>

            <tbody>

              {products.map((product) => (

                <tr key={product.id}>

                  <td>{product.id}</td>

                  <td>{product.name}</td>

                  <td>{product.category}</td>

                  <td>{product.brand}</td>

                  <td>Rs. {product.price}</td>

                  <td>{product.stock}</td>

                  <td>

                    <Link
                      to={`/admin/edit-product/${product.id}`}
                      className="btn btn-primary btn-sm me-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
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

export default ManageProducts;