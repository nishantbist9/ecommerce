import React, { useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products] = useState([
    {
      id: 1,
      name: "Steelbird SBA-7 Helmet",
      category: "Helmet",
      price: 3500,
      image: "https://via.placeholder.com/250x200?text=Helmet",
    },
    {
      id: 2,
      name: "Rynox Gloves",
      category: "Gloves",
      price: 2500,
      image: "https://via.placeholder.com/250x200?text=Gloves",
    },
    {
      id: 3,
      name: "LS2 FF800 Helmet",
      category: "Helmet",
      price: 9500,
      image: "https://via.placeholder.com/250x200?text=LS2+Helmet",
    },
    {
      id: 4,
      name: "Riding Jacket",
      category: "Jacket",
      price: 6500,
      image: "https://via.placeholder.com/250x200?text=Jacket",
    },
    {
      id: 5,
      name: "Riding Boots",
      category: "Boots",
      price: 7500,
      image: "https://via.placeholder.com/250x200?text=Boots",
    },
    {
      id: 6,
      name: "Knee Guard",
      category: "Accessories",
      price: 1800,
      image: "https://via.placeholder.com/250x200?text=Knee+Guard",
    },
  ]);

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Our Products
      </h2>

      <div className="row">

        {products.map((product) => (

          <div className="col-md-4 mb-4" key={product.id}>

            <div className="card shadow h-100">

              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />

              <div className="card-body">

                <h5>{product.name}</h5>

                <p>
                  <strong>Category:</strong> {product.category}
                </p>

                <h4 className="text-success">
                  Rs. {product.price}
                </h4>

                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-primary w-100 mb-2"
                >
                  View Details
                </Link>

                <button className="btn btn-success w-100">
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;