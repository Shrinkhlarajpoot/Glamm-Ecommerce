import { Footer } from "../../components";
import { Loader } from "../../components/Loader/Loader";
import { useCart } from "../../context/cartContext";
import "./CartScreen.css";
import { CartCard, Cartdetails } from "./components";

const CartScreen = () => {
  const { cart, cartLoading } = useCart();
  return (
    <div>
      {!cartLoading ? (
        <>
          <div className="cart">
            {cart.cartProducts.length===0 && (
              <h1 class="heading_emptycart">Oops ..Cart is Empty</h1>
            )}
            <div>
              {cart.cartProducts &&
                cart.cartProducts.map((product) => (
                  <CartCard product={product} key={product._id} />
                ))}
            </div>
            { !!cart.cartProducts.length &&  (
              <div className="cart__payment">
                <Cartdetails />
              </div>
            )}
          
          </div>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export { CartScreen };
