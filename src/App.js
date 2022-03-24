import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  LoginScreen,
  SignupScreen,
  WishlistScreen,
  LogoutScreen,
} from "./frontend/pages";
import { Header } from "./frontend/components";
import MockAPI from "./frontend/components/Mockman";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./frontend/components/Loader/Loader";

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
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/wishlist" element={<WishlistScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/logout" element={<LogoutScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="mock" element={<MockAPI />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </div>
  );
}
export default App;
