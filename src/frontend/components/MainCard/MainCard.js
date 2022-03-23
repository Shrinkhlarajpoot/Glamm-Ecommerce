import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { addToCartService } from "../../services";
import "./MainCard.css";
const MainCard = ({ products }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { cart, setCart } = useCart();
  const [inCart,setInCart]=useState(false)
  useEffect(()=>{
 cart.cartProducts.find((prod)=>prod._id === products._id) && setInCart(true)
 
  

  },[cart.cartProducts])

  const addToCart = async() => {
    console.log("add to cart")
    if (auth.isAuth) {
      try {
        const res = await  addToCartService(products, auth.token);
        console.log(res)
        if (res.status === 201) {
          setCart((prev) => ({ ...prev, cartProducts: res.data.cart}));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      {products.inStock ? (
        <div className="card card__vertical" key={products._id}>
          {products.isLatest && (
            <h4 className="card__vertical-title title" style={{ top: "-1rem" }}>
              NEW
            </h4>
          )}

          <div className="card__vertical-maincontent">
            <div className="card__vertical-img">
              <img src={products.img} alt={products.title} />
            </div>
            <div
              className="card__vertical-content"
              style={{ marginTop: "0px" }}
            >
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
                className="btn__pri"
                style={{ marginTop: "1.2rem" }}
                onClick={
                  auth.isAuth
                    ? inCart
                      ? () => navigate("/cart")
                      : () => addToCart()
                    : () => navigate("/login")
                }
              >
                {inCart ? "View in Cart" :"Add to Cart"}
              </div>
              <div className="btn__sec">Add To WishList</div>
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
