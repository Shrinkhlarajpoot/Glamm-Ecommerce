import { Route, Routes, Navigate } from "react-router-dom";
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
  ErrorPage,
} from "../pages";
import { Header, Loader } from "../components";
import { useAuth } from "../context";

const Pageroutes = () => {
  const { auth } = useAuth();
  return (
    <div>
      <Header />
      <Routes>
        {!auth.token ? (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/signin" element={<Navigate replace to="/home" />} />
            <Route path="/login" element={<Navigate replace to="/home" />} />
          </>
        )}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/products" element={<Product />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/*" element={<ErrorPage />} />

        <Route element={<Privateroutes />}>
         
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/loader" element={<Loader />} />
          {/* <Route path="/:productId" element={<SingleProduct />} /> */}
          <Route path="/product/:productId" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
};
export { Pageroutes };
