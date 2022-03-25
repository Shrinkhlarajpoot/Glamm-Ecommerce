import "./SingleProduct.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWishlist } from "../../context/wishlistContext";
import { useCart } from "../../context/cartContext";
import { useProductListing } from "../../context/productListing-context";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import {
  addToCartService,
  addToWishlistService,
  removeFromWishlistService,
} from "../../services";

const SingleProduct = () => {
  const params = useParams();
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const { wishlist, wishlistdispatch } = useWishlist();
  const [wishlistloading, setwishlistLoading] = useState(false);
  const [cartloading, setCartLoading] = useState(false);
  const { cart, cartdispatch } = useCart();
  const param = useParams();
  const { auth } = useAuth();
  const { products } = useProductListing();
  const navigate = useNavigate();
  const product = products?.find((product) => product.id === param.productId);
  const [selectedImg, setSelectedImg] = useState(product.img[0]);

  const addToCart = async () => {
    if (auth.isAuth) {
      setCartLoading(() => true);
      try {
        const res = await addToCartService(product, auth.token);

        if (res.status === 201) {
          cartdispatch({
            type: "SET_CART",
            payload: res.data.cart,
          });
          setCartLoading(() => false);
          toast.success(`${product.title} added to the cart`);
        }
      } catch (error) {
        toast.error(` Cannot add ${product.title}`);
      }
    }
  };

  const addToWishlist = async () => {
    if (auth.isAuth) {
      setwishlistLoading(() => true);
      try {
        const res = await addToWishlistService(product, auth.token);
        if (res.status === 201) {
          wishlistdispatch({
            type: "SET_WISHLIST",
            payload: res.data.wishlist,
          });
          setwishlistLoading(() => false);
          toast.success(`${product.title} added to the wishlist`);
        }
      } catch (error) {
        toast.error(` Cannot add ${product.title}`);
      }
    }
  };
  const deleteFromWishlist = async () => {
    const res = await removeFromWishlistService(product._id, auth.token);
    if (res.status === 200) {
      wishlistdispatch({
        type: "SET_WISHLIST",
        payload: res.data.wishlist,
      });
      toast.success(`${product.title} removed from wishlist`);
    } else {
      toast.error(` Cannot delete ${product.title}`);
    }
  };

  useEffect(() => {
    cart.cartProducts.find((prod) => prod._id === product._id) &&
      setInCart(true);
  }, [cart.cartProducts]);
  useEffect(() => {
    wishlist.wishlistProducts.find((prod) => prod._id === product._id)
      ? setInWishlist(true)
      : setInWishlist(false);
  }, [wishlist.wishlistProducts]);

  const ImageChanger = (index) => {
    setSelectedImg(() => product.img[index]);
  };

  return (
    <>
      <div class="single__product-page">
        <div class="single__product-img">
          <img src={selectedImg}></img>
          <div class="single__products-subimg">
            <img src={product.img[1]} onClick={() => ImageChanger(1)}></img>
            <img src={product.img[2]} onClick={() => ImageChanger(2)}></img>
            <img src={product.img[0]} onClick={() => ImageChanger(0)}></img>
          </div>
        </div>
        <div>
          <div class="single__product-desp">
            <div>
              <h1>{product.title}</h1>
              <div>
                <h4>
                  Ratings: {product.rating} | 5{" "}
                  <i className="fas fa-star rating__star"></i>
                </h4>
                <h3 style={{ fontweight: "bold" }}>
                  Price : Rs {product.price}
                </h3>
                <h3 style={{ color: "green" }}>10% Discount Available</h3>
                <h4
                  style={{ color: "var(--primary-color", lineHeight: "2rem" }}
                >
                  {product.description}
                </h4>
              </div>
            </div>
          </div>
          <div class="single__product-btn">
            <button
              className="btn__pri btn"
              disabled={cartloading}
              onClick={
                auth.isAuth
                  ? inCart
                    ? () => navigate("/cart")
                    : () => addToCart()
                  : () => navigate("/login")
              }
            >
              {" "}
              {inCart ? "View in Cart" : "Add to Cart"}
            </button>
            <button
              className="btn__pri btn"
              disabled={wishlistloading}
              onClick={
                auth.isAuth
                  ? inWishlist
                    ? () => deleteFromWishlist()
                    : () => addToWishlist()
                  : () => navigate("/login")
              }
            >
              {inWishlist ? "Delete from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export { SingleProduct };
