import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";

import "./MainCard.css";

const MainCard = ({ products }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { cart, cartloading, addToCart } = useCart();
  const { wishlist, addToWishlist, wishlistloading, deleteFromWishlist } =
    useWishlist();
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const [selectedimg, setSelectedImg] = useState(products.img[0]);

  useEffect(() => {
    cart?.cartProducts?.length>0 && cart?.cartProducts?.find((prod) => prod._id === products._id) &&
      setInCart(true);
  }, [cart.cartProducts]);
  useEffect(() => {
    wishlist.wishlistProducts.find((prod) => prod._id === products._id)
      ? setInWishlist(true)
      : setInWishlist(false);
  }, [wishlist.wishlistProducts]);

  return (
    <div>
      {products.inStock ? (
        <div className="card__vertical card" key={products?._id}>
          <button
            className="like__button  card__like "
            disabled={wishlistloading}
            onClick={
              auth.isAuth
                ? inWishlist
                  ? () => deleteFromWishlist(products)
                  : () => addToWishlist(products)
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

          {products?.isLatest && (
            <h4 class="card__vertical-title title" style={{ top: "-1.2rem" }}>
              NEW
            </h4>
          )}

          <div className="card__vertical-maincontent">
            <div className="card__vertical-img">
              <img
                src={selectedimg}
                alt={products?.title}
                onClick={() => navigate(`/product/${products?.id}`)}
                onMouseOver={() => setSelectedImg(products?.img[1])}
                onMouseLeave={() => setSelectedImg(products?.img[0])}
              />
            </div>
            <div
              className="card__vertical-content"
              style={{ margin: "1px 1px" }}
            >
              <h3>{products?.title?.toUpperCase()}</h3>
              <div style={{fontSize:"1.2rem"}}>{products?.categoryName?.toUpperCase()}</div>
              <div style={{fontWeight:"bold"}}>
                MRP :<i className="fas fa-rupee-sign"></i>
                {products?.price}
              </div>
              <div>
                {products?.rating} | 5
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
                      : () => addToCart(products)
                    : () => navigate("/login")
                }
              >
                {inCart ? "View in Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div class="card__overlay-blur" key={products?._id}>
          <div class=" card card__vertical card__overlay">
            <div class="card__vertical-maincontent">
              <div class="card__vertical-img">
                <img src={products?.img} alt={products?.title} />
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
                  disabled={true}
                >
                  Add To Cart
                </div>
                <div className="btn__sec" disabled={true}>
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
