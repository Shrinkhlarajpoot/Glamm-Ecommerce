import "./App.css";
import { Route, Routes } from "react-router-dom";
import {HomeScreen,ProductScreen,CartScreen,LoginScreen,SignupScreen,WishlistScreen,LogoutScreen} from "./frontend/pages"
import { Header } from "./frontend/components";
import MockAPI from "./frontend/components/Mockman";

function App() {
return (
    <div className="App">
     <Header/>
     <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/wishlist" element={<WishlistScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/logout" element={<LogoutScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="mock" element={<MockAPI/>} />
        
      </Routes>
    </div>
  );
}
export default App;
