import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
const Header = () => {
  const [responsivenav, setResponsivenav] = useState(false);
  const { auth } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <div>
      <header className="header">
        <div className="logo__main">
          <Link to="/" className="Link_style">
            GLAM
          </Link>
        </div>
        <div class="subheader__list">
          <Link to="/" className="Link_style subheader__item">
            Home
          </Link>
          <Link to="/products" className="Link_style subheader__item">
            Products
          </Link>
          <Link to="/products" className="Link_style subheader__item">
            About
          </Link>
        </div>
        <div className="header__items">
          <li
            className={
              responsivenav
                ? "fa fa-close closeicon Link_style"
                : "fas fa-bars Link_style"
            }
            id="menu__bar"
            onClick={() => setResponsivenav(() => !responsivenav)}
          ></li>
          <ul className="header__list">
            <li>
              <Link to={auth.token ? "/cart" : "/login"} className="Link_style">
                <i className="fas fa-shopping-cart ">
                  <div className="items__no">{cart.cartProducts.length}</div>
                </i>
              </Link>
            </li>
            <li>
              <Link
                to={auth.token ? "/wishlist" : "/login"}
                className="Link_style"
              >
                <i className="fas fa-heart wishlist__item-count">
                  <div className="items__no ">
                    {wishlist.wishlistProducts.length}
                  </div>
                </i>{" "}
              </Link>
            </li>
            <li>
              <Link
                to={auth.token ? "/logout" : "/login"}
                className="Link_style"
              >
                {auth.token ? (
                  <i class="fa fa-sign-out"></i>
                ) : (
                  <i class="fa fa-user"></i>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </header>
      {responsivenav && (
        <div className="responsive__nav">
          <Link
            to="/"
            className="Link_style"
            onClick={() => setResponsivenav(false)}
          >
            Home
          </Link>
          <Link
            to={auth.token ? "/products" : "/login"}
            className="Link_style"
            onClick={() => {
              setResponsivenav(false);
            }}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="Link_style"
            onClick={() => setResponsivenav(false)}
          >
            Wishlist ({wishlist.wishlistProducts.length})
          </Link>
          <Link
            to={auth.token ? "/wishlist" : "/login"}
            className="Link_style"
            onClick={() => setResponsivenav(false)}
          >
            Cart ({cart.cartProducts.length})
          </Link>
          <Link
            to={auth.token ? "/logout" : "/login"}
            className="Link_style"
            onClick={() => setResponsivenav(false)}
          >
            {auth.token ? "Logout" : "Login"}
          </Link>
        </div>
      )}
    </div>
  );
};
export { Header };
