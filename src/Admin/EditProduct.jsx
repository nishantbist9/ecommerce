import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "Steelbird SBA-7 Helmet",
    brand: "Steelbird",
    category: "Helmet",
    price: 3500,
    stock: 15,
    description: "Premium full-face helmet with ISI certification.",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        image: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Product Updated Successfully!");

    console.log(product);

    navigate("/admin/products");
  };

  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-warning">
          <h3>Edit Product</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={product.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Brand</label>
              <input
                type="text"
                className="form-control"
                name="brand"
                value={product.brand}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Category</label>

              <select
                className="form-select"
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                <option>Helmet</option>
                <option>Gloves</option>
                <option>Jacket</option>
                <option>Boots</option>
                <option>Accessories</option>
              </select>

            </div>

            <div className="mb-3">
              <label>Price</label>

              <input
                type="number"
                className="form-control"
                name="price"
                value={product.price}
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">
              <label>Stock</label>

              <input
                type="number"
                className="form-control"
                name="stock"
                value={product.stock}
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">
              <label>Description</label>

              <textarea
                rows="4"
                className="form-control"
                name="description"
                value={product.description}
                onChange={handleChange}
              ></textarea>

            </div>

            <div className="mb-3">
              <label>Change Image</label>

              <input
                type="file"
                className="form-control"
                name="image"
                onChange={handleChange}
              />

            </div>

            <button className="btn btn-success me-2">
              Update Product
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/admin/products")}
            >
              Cancel
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditProduct;