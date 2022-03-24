import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useCart } from "../../../context/cartContext";
import { useWishlist } from "../../../context/wishlistContext";
import {
  addToWishlistService,
  removeFromCartService,
  updateQuantityCart,
} from "../../../services";
import "./CartCard.css";
import { toast } from "react-toastify";
const CartCard = ({ product }) => {
  const [inWishlist, setInWishlist] = useState(false);
  const { auth } = useAuth();
  const { cartdispatch } = useCart();
  const { wishlist, wishlistdispatch } = useWishlist();
  const[updating,setUpdating]=useState(false)
  const navigate = useNavigate();

  const removeFromCart = async () => {
    const res = await removeFromCartService(product._id, auth.token);
    if (res.status === 200) {
      cartdispatch({
        type: "SET_CART",
        payload: res.data.cart,
      });
      toast.success(` ${product.title} removed from Cart`);
    } else {
      console.log(error);
      toast.error(`Cannot remove ${product.title}`);
    }
  };
  const updatecartQuantity = async (type) => {
    let res = null;
    try {
    
      if (product.qty === 1 && type === "decrement") {
        console.log("coming");
        res = await removeFromCartService(product._id, auth.token);
       
        toast.success(` ${product.title} removed from Cart`);
      } else {
        setUpdating(()=>true)
        res = await updateQuantityCart(product._id, auth.token, type);
        toast.info("Cart Updated Sucessfully");
        setUpdating(()=>false)
      }

      if (res.status === 200) {
        cartdispatch({
          type: "SET_CART",
          payload: res.data.cart,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Cannot Updated Cart at the moment");
    }
  };
  const addToWishlist = async () => {
    if (auth.isAuth) {
      try {
        const res = await addToWishlistService(product, auth.token);
        if (res.status === 201) {
          const findProduct = wishlist.wishlistProducts.find(
            (item) => item._id === product._id
          );
          if (findProduct) {
            toast.error(`${product.title} already exist in the wishlist`);
          }
          if (!findProduct) {
            wishlistdispatch({
              type: "SET_WISHLIST",
              payload: res.data.wishlist,
            });
            console.log(res.data.wishlist);
            toast.success(`${product.title} added to the wishlist`);

            const cartItem = await removeFromCartService(
              product._id,
              auth.token
            );
            if (cartItem.status === 200) {
              cartdispatch({
                type: "SET_CART",
                payload: cartItem.data.cart,
              });
            } else {
              console.log(error);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
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
          <h3 className="product__details">{product.title}</h3>
          <div className="product__details">
            MRP: <i className="fas fa-rupee-sign "></i>
            {product.price}
          </div>
          <div className="product__details">
          {product.rating} | 5<i className="fas fa-star "></i>
            <div className="count">
            <button  disabled={updating}
            onClick={() => updatecartQuantity("decrement")}>-</button>
              <span>{product.qty}</span>
              <button   disabled={updating}
               onClick={() => updatecartQuantity("increment")}>+</button>
              
            </div>
          </div>
        </div>
      </div>

      <div className="hori2__btn">
        <div
          className="btn__pri"
          onClick={() => (inWishlist ? navigate("/wishlist") : addToWishlist())}
        >
          {inWishlist ? "View in Wishlist" : "Add to Wishlist"}
        </div>
      </div>
    </div>





  );
};
export { CartCard };
