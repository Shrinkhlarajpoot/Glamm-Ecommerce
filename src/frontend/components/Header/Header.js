import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth, useCart, useWishlist } from "../../context";
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
              <Link to="/cart" className="Link_style">
                <i className="fas fa-shopping-cart ">
                 {cart?.cartProducts?.length>0 &&<div className="items__no">{cart.cartProducts.length}</div>}
                </i>
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="Link_style">
                <i className="fas fa-heart wishlist__item-count">
               { wishlist?.wishlistProducts?.length>0 &&<div className="items__no ">
                    { wishlist.wishlistProducts.length}
                  </div>}
                </i>
              </Link>
            </li>
            <li>
              <Link
                to={auth.token ? "/profile" : "/login"}
                className="Link_style"
              >
                
                  <i class="fa fa-user"></i>
                
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
            to="products"
            className="Link_style"
            onClick={() => {
              setResponsivenav(false);
            }}
          >
            Products
          </Link>
          <Link
            to="/wishlist"
            className="Link_style"
            onClick={() => setResponsivenav(false)}
          >
            Wishlist ({wishlist.wishlistProducts.length})
          </Link>
          <Link
            to="/cart"
            className="Link_style"
            onClick={() => setResponsivenav(false)}
          >
            Cart ({cart.cartProducts.length})
          </Link>
          <Link
            to={auth.token ? "/profile" : "/login"}
            className="Link_style"
            onClick={() => setResponsivenav(false)}
          >
            {auth.token ? "Profile" : "Login"}
          </Link>
        </div>
      )}
    </div>
  );
};
export { Header };
