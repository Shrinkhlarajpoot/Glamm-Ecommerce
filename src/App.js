import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Product,
  Cart,
  Login,
  Signup,
  Wishlist,
  Logout,
  SingleProduct,
} from "./frontend/pages";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader,Header } from "./frontend/components";


function App() {
  return (
    <div className="App">
      <ToastContainer
        theme="colored"
        autoClose={1500}
        position="bottom-right"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/:productId" element={<SingleProduct />} />
      </Routes>
   
    </div>
  );
}
export default App;
