import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { toast } from "react-toastify";
import { useWishlist } from "../../context/wishlistContext";
import {
  addToCartService,
  addToWishlistService,
  removeFromWishlistService,
} from "../../services";
import "./MainCard.css";
const MainCard = ({ products }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { cart, cartdispatch } = useCart();
  const { wishlist, wishlistdispatch } = useWishlist();
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const [wishlistloading, setwishlistLoading] = useState(false);
  const [cartloading, setCartLoading] = useState(false)

  useEffect(() => {
    cart.cartProducts.find((prod) => prod._id === products._id) &&
      setInCart(true);
  }, [cart.cartProducts]);
  useEffect(() => {
    wishlist.wishlistProducts.find((prod) => prod._id === products._id)
      ? setInWishlist(true)
      : setInWishlist(false);
  }, [wishlist.wishlistProducts]);

  const addToCart = async () => {
    if (auth.isAuth) {
      setCartLoading(() => true);
      try {
        const res = await addToCartService(products, auth.token);

        if (res.status === 201) {
          cartdispatch({
            type: "SET_CART",
            payload: res.data.cart,
          });
          setCartLoading(() => false);
          toast.success(`${products.title} added to the cart`);
        }
      } catch (error) {
        console.log(error);
        toast.error(` Cannot add ${products.title}`);
      }
    }
  };
  const addToWishlist = async () => {
    if (auth.isAuth) {
      setwishlistLoading(() => true);
      try {
        const res = await addToWishlistService(products, auth.token);
        if (res.status === 201) {
          wishlistdispatch({
            type: "SET_WISHLIST",
            payload: res.data.wishlist,
          });
          setwishlistLoading(() => false);
          toast.success(`${products.title} added to the wishlist`);
        }
      } catch (error) {
        console.log(error);
        toast.error(` Cannot add ${products.title}`);
      }
    }
  };
  const deleteFromWishlist = async () => {
    const res = await removeFromWishlistService(products._id, auth.token);
    if (res.status === 200) {
      wishlistdispatch({
        type: "SET_WISHLIST",
        payload: res.data.wishlist,
      });
      toast.success(`${products.title} removed from wishlist`);
    } else {
      console.log(error);
      toast.error(` Cannot delete ${products.title}`);
    }
  };
  return (
    <div>
      {products.inStock ? (
        <div className="card__vertical card" key={products._id}>
          <button
            className="like__button  card__like "
            disabled={wishlistloading}
            onClick={
              auth.isAuth
                ? inWishlist
                  ? () => deleteFromWishlist()
                  : () => addToWishlist()
                : () => navigate("/login")
            }
          >
            {" "}
            <i
              className={
                inWishlist
                  ? "fa fa-heart card__like"
                  : "far fa-heart cart__unlike card__like"
              }
              role="button"
            ></i>
          </button>

          {products.isLatest && (
            <h4 class="card__vertical-title title" style={{ top: "-1.2rem" }}>
              NEW
            </h4>
          )}

          <div className="card__vertical-maincontent">
            <div className="card__vertical-img">
              <img src={products.img} alt={products.title} />
            </div>
            <div className="card__vertical-content">
              <h3>{products.title}</h3>
              <div>
                MRP :<i className="fas fa-rupee-sign"></i>
                {products.price}
              </div>
              <div>
                {products.rating} | 5
                <i className="fas fa-star rating__star"></i>
              </div>
              <button
                className="btn__pri btn"
                disabled={cartloading}
                style={{ marginTop: "1.2rem" }}
                onClick={
                  auth.isAuth
                    ? inCart
                      ? () => navigate("/cart")
                      : () => addToCart()
                    : () => navigate("/login")
                }
              >
                {inCart ? "View in Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div class="card__overlay-blur" key={products._id}>
          <div class=" card card__vertical card__overlay">
            <div class="card__vertical-maincontent">
              <div class="card__vertical-img">
                <img src={products.img} alt={products.title} />
              </div>
              <div class="card__vertical-content">
                <h3>{products.title}</h3>
                <div>
                  MRP :<i className="fas fa-rupee-sign"></i>
                  {products.price}
                </div>
                <div>
                  {products.rating} | 5
                  <i className="fas fa-star rating__star"></i>
                </div>
                <div
                  className="btn__pri btn"
                  style={{ marginTop: "1.2rem" }}
                  disabled
                >
                  Add To Cart
                </div>
                <div className="btn__sec" disabled>
                  Add To WishList
                </div>
              </div>
            </div>
          </div>
          <h4 class="card__vertical-overlay overlay" style={{ left: "5rem" }}>
            OUT OF STOCK
          </h4>
        </div>
      )}
    </div>
  );
};
export { MainCard };
