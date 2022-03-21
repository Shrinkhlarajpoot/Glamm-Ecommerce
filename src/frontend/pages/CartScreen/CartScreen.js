import { Footer } from "../../components";
import "./CartScreen.css";
import { CartCard, Cartdetails } from "./components";

const CartScreen = () => {
  return (
    <div>
      <div className="cart">
        <div>
          <CartCard />
          <CartCard />
        </div>
        <div className="cart__payment">
          <Cartdetails />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export { CartScreen };
