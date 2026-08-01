import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Steelbird SBA-7 Helmet",
    brand: "Steelbird",
    category: "Helmet",
    price: 3500,
    stock: 12,
    rating: 4.8,
    description:
      "Premium ISI Certified Full Face Helmet with high-quality visor, aerodynamic design, comfortable inner padding, and excellent safety for daily riding.",
    image: "https://via.placeholder.com/500x400?text=Steelbird+Helmet",
  };

  return (
    <div className="container mt-5">

      <div className="row">

        {/* Product Image */}

        <div className="col-md-6">

          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />

        </div>

        {/* Product Details */}

        <div className="col-md-6">

          <h2>{product.name}</h2>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <h3 className="text-success">
            Rs. {product.price}
          </h3>

          <p>
            ⭐ {product.rating} / 5
          </p>

          <p>
            <strong>Stock:</strong> {product.stock} Available
          </p>

          <p>{product.description}</p>

          <div className="mb-3">

            <label className="form-label">
              Quantity
            </label>

            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-control"
              style={{ width: "120px" }}
            />

          </div>

          <button
            className="btn btn-success me-2"
            onClick={() => alert("Added to Cart")}
          >
            🛒 Add to Cart
          </button>

          <button
            className="btn btn-danger me-2"
            onClick={() => alert("Added to Wishlist")}
          >
            ❤️ Wishlist
          </button>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/checkout")}
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;