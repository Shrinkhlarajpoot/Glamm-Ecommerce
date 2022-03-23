import { Footer } from "../../components";
import { useCart } from "../../context/cartContext";
import "./CartScreen.css";
import { CartCard, Cartdetails } from "./components";

const CartScreen = () => {
  const { cart, setCart } = useCart();
  console.log(cart);
  return (
    <div>
      <div className="cart">
        {cart.cartProducts.length === 0 && (
          <h1 class="heading_emptycart">Oops ..Cart is Empty</h1>
        )}
        <div>
          {cart.cartProducts &&
            cart.cartProducts.map((product) => (
              <CartCard product={product} key={product._id} />
            ))}
        </div>
        {cart.cartProducts.length && (
          <div className="cart__payment">
            <Cartdetails />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export { CartScreen };
