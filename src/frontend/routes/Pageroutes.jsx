import { Route, Routes ,Navigate} from "react-router-dom";
import Mockman from "mockman-js";
import { Privateroutes } from "./Privateroutes";
import {
  Signup,
  Logout,
  Login,
  Home,
  Product,
  Cart,
  Wishlist,
  SingleProduct,
} from "../pages";
import { Header, Loader } from "../components";

const Pageroutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/products" element={<Product />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route element={<Privateroutes />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/:productId" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
};
export { Pageroutes };
