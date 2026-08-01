import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserNavbar from "../component/UserNavbar";
import UserSidebar from "../component/UserSidebar";

function UserDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/products");
    console.log("PRODUCT RESPONSE:", res.data); // 👈 ADD THIS
    setProducts(res.data);
  } catch (err) {
    console.log("ERROR:", err);
  }
};

  const addToCart = async (productId) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:5000/api/cart",
      {
        productId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);

  } catch (error) {
    alert(error.response?.data?.message || "Failed to add to cart");
  }
};

  return (
    <>
      {/* <UserNavbar /> */}

      <div className="d-flex">

        <UserSidebar />

        <div className="container-fluid p-4">

          <h2 className="mb-4">
            Welcome to Safety Gear Shop 👋
          </h2>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card shadow p-3">
                <h4>🪖 Products</h4>
                <p>Browse all safety equipment.</p>

                <Link to="/products" className="btn btn-primary">
                  View Products
                </Link>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow p-3">
                <h4>🛒 Cart</h4>
                <p>Manage your shopping cart.</p>

                <Link to="/cart" className="btn btn-success">
                  Go to Cart
                </Link>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow p-3">
                <h4>📦 Orders</h4>
                <p>View your previous orders.</p>

                <Link to="/orders" className="btn btn-warning">
                  My Orders
                </Link>
              </div>
            </div>

          </div>

          <hr />

          <h3 className="mb-4">Featured Products</h3>

          <div className="row">

            {products.map((product) => (

              <div className="col-md-3 mb-4" key={product._id}>

                <div className="card shadow h-100">

                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body">

                    <h5>{product.name}</h5>

                    <p>{product.brand}</p>

                    <h5 className="text-success">
                      Rs. {product.price}
                    </h5>

                    <Link
                      to={`/product/${product._id}`}
                      className="btn btn-primary w-100 mb-2"
                    >
                      View Details
                    </Link>

                   <button
  className="btn btn-success w-100"
  onClick={() => addToCart(product._id)}
>
  Add to Cart
</button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default UserDashboard;












































// import React from "react";
// import UserNavbar from "../component/UserNavbar";
// import UserSidebar from "../component/UserSidebar";

// function UserDashboard() {
//   return (
//     <>
//       <UserNavbar />

//       <div className="d-flex">
//         <UserSidebar />

//         <div className="container p-4">
//           <h2>User Dashboard Working ✅</h2>
//           <p>If you can see this, Navbar and Sidebar are NOT the problem.</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserDashboard;