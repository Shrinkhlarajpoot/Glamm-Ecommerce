import "./SingleProduct.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth,useCart,useWishlist,useProductListing } from "../../context";
const SingleProduct = () => {
  const params = useParams();
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const { wishlist, addToWishlist, deleteFromWishlist, wishlistloading } =
    useWishlist();
  const { cart, addToCart, cartloading } = useCart();
  const param = useParams();
  const { auth } = useAuth();
  const { products } = useProductListing();
  const navigate = useNavigate();
  const product = products?.find((product) => product.id === param.productId);
  const [selectedImg, setSelectedImg] = useState(product?.img[0]);
  console.log(product);
  console.log(product?.img[0], "images");

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
    setSelectedImg(() => product?.img[index]);
  };

  return (
    <>
      <div class="single__product-page">
        <div class="single__product-img">
          <img src={selectedImg ? selectedImg : product?.img[0]}></img>
          <div class="single__products-subimg">
            <img src={product?.img[1]} onClick={() => ImageChanger(1)}></img>
            <img src={product?.img[2]} onClick={() => ImageChanger(2)}></img>
            <img src={product?.img[0]} onClick={() => ImageChanger(0)}></img>
          </div>
        </div>
        <div>
          <div class="single__product-desp">
            <div>
              <h1>{product?.title}</h1>
              <div>
                <h4>
                  Ratings: {product?.rating} | 5{" "}
                  <i className="fas fa-star rating__star"></i>
                </h4>
                <h3 style={{ fontweight: "bold" }}>
                  Price : Rs {product?.price}
                </h3>
                <h3 style={{ color: "green" }}>10% Discount Available</h3>
                <h4
                  style={{ color: "var(--primary-color", lineHeight: "2rem" }}
                >
                  {product?.description}
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
                    : () => addToCart(product)
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
                    ? () => deleteFromWishlist(product)
                    : () => addToWishlist(product)
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
