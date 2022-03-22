import { useAuth } from "../../../context/authContext";
import { useCart } from "../../../context/cartContext";
import { removeFromCartService, updateQuantityCart } from "../../../services";
import "./CartCard.css";
const CartCard = ({ product }) => {
  const { auth } = useAuth();
  const { cart, setCart } = useCart();
  const removeFromCart = async () => {
    const res = await removeFromCartService(product._id, auth.token);
    if (res.status === 200) {
      setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
    } else {
      console.log(error);
    }
  };
  const updatecartQuantity = async (type) => {
    let res = null;
    try {
      if (product.qty === 1 && type === "decrement") {
        console.log("coming");
        res = await removeFromCartService(product._id, auth.token);
        setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
      } else {
        res = await updateQuantityCart(product._id, auth.token, type);
        setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
      }

      if (res.status === 200) {
        setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card__hori2" key={product._id}>
      <i className="fa fa-close" onClick={() => removeFromCart()}></i>
      <div className="card__hori2-maincontent">
        <img
          src={product.img}
          alt={product.title}
          className="card__hori2-img"
        />
        <div className="card__hori2-content">
          <h4>{product.title}</h4>
          <div>
            MRP: <i className="fas fa-rupee-sign"></i>
            {product.price}
          </div>
          <div>
            5<i className="fas fa-star"></i>| {product.rating}
            <div className="count">
              <button onClick={() => updatecartQuantity("increment")}>+</button>
              <span>{product.qty}</span>
              <button onClick={() => updatecartQuantity("decrement")}>-</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hori2__btn">
        <div className="btn__pri">Move to WishList</div>
      </div>
    </div>
  );
};
export { CartCard };
