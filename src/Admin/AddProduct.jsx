import React, { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
    description: "",
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

    console.log(product);

    alert("Product Added Successfully!");

    setProduct({
      name: "",
      brand: "",
      category: "",
      price: "",
      stock: "",
      description: "",
      image: null,
    });

    e.target.reset();
  };

  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3>Add New Product</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Brand</label>
              <input
                type="text"
                className="form-control"
                name="brand"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>

              <select
                className="form-select"
                name="category"
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option>Helmet</option>
                <option>Gloves</option>
                <option>Jacket</option>
                <option>Boots</option>
                <option>Accessories</option>
              </select>

            </div>

            <div className="mb-3">
              <label className="form-label">Price (Rs.)</label>

              <input
                type="number"
                className="form-control"
                name="price"
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-3">
              <label className="form-label">Stock Quantity</label>

              <input
                type="number"
                className="form-control"
                name="stock"
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>

              <textarea
                className="form-control"
                rows="4"
                name="description"
                onChange={handleChange}
                required
              ></textarea>

            </div>

            <div className="mb-3">
              <label className="form-label">Product Image</label>

              <input
                type="file"
                className="form-control"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />

            </div>

            <button className="btn btn-success w-100">
              Add Product
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddProduct;