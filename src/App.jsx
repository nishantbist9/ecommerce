// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Public Pages
// import LandingPage from "./Pages/LandingPage";
// import LoginPage from "./Pages/LoginPage";
// import RegisterPage from "./Pages/RegisterPage";

// // User Pages
// import UserDashboard from "./Pages/UserDashboard";
// import Products from "./Pages/Products";
// import ProductDetails from "./Pages/ProductDetails";
// import Cart from "./Pages/Cart";
// import Checkout from "./Pages/Checkout";
// import MyOrders from "./Pages/MyOrders";
// import Profile from "./Pages/Profile";
// import Wishlist from "./Pages/Wishlist";

// // Admin Pages
// import AdminDashboard from "./Admin/AdminDashboard";
// // import AddProduct from "./Admin/AddProduct";
// import ManageProducts from "./Admin/ManageProducts";
// import EditProduct from "./Admin/EditProduct";
// import ManageOrders from "./Admin/ManageOrders";
// import ManageUsers from "./Admin/ManageUsers";
// import Categories from "./Admin/Categories";
// import Payments from "./Admin/Payments";
// import Reports from "./Admin/Reports";
// import Settings from "./Admin/Settings";

// function App() {
//   return (
//     <Router>
//       <Routes>

//         {/* Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />

//         {/* User Routes */}
//         <Route
//   path="/user-dashboard"
//   element={<h1>User Dashboard Route Works</h1>}
// />
//         <Route path="/products" element={<Products />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/orders" element={<MyOrders />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/wishlist" element={<Wishlist />} />

//         {/* Admin Routes */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         {/* <Route path="/admin/add-product" element={<AddProduct />} /> */}
//         <Route path="/admin/products" element={<ManageProducts />} />
//         <Route path="/admin/edit-product/:id" element={<EditProduct />} />
//         <Route path="/admin/orders" element={<ManageOrders />} />
//         <Route path="/admin/users" element={<ManageUsers />} />
//         <Route path="/admin/categories" element={<Categories />} />
//         <Route path="/admin/payments" element={<Payments />} />
//         <Route path="/admin/reports" element={<Reports />} />
//         <Route path="/admin/settings" element={<Settings />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
  path="/user-dashboard"
  element={<h1>User Dashboard Works ✅</h1>}
/>
      </Routes>
    </BrowserRouter>
  );
}