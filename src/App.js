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
import { Pageroutes } from "./frontend/routes/Pageroutes";

function App() {
  return (
    <div className="App">
      <ToastContainer
        theme="colored"
        autoClose={1500}
        position="bottom-right"
      />

      <Pageroutes />
    </div>
  );
}
export default App;
