import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Steelbird SBA-7 Helmet",
      price: 3500,
      quantity: 1,
      image: "https://via.placeholder.com/150?text=Helmet",
    },
    {
      id: 2,
      name: "Rynox Gloves",
      price: 2500,
      quantity: 2,
      image: "https://via.placeholder.com/150?text=Gloves",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    if (window.confirm("Remove this item from cart?")) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">

      <h2 className="mb-4">🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="table-responsive">

            <table className="table table-bordered align-middle">

              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {cartItems.map((item) => (

                  <tr key={item.id}>

                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        width="80"
                      />
                    </td>

                    <td>{item.name}</td>

                    <td>Rs. {item.price}</td>

                    <td>

                      <button
                        className="btn btn-danger btn-sm me-2"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      {item.quantity}

                      <button
                        className="btn btn-success btn-sm ms-2"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>

                    </td>

                    <td>
                      Rs. {item.price * item.quantity}
                    </td>

                    <td>

                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="card mt-4 shadow">

            <div className="card-body">

              <h4>Total: Rs. {totalPrice}</h4>

              <button
                className="btn btn-success mt-3"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        </>
      )}

    </div>
  );
}

export default Cart;