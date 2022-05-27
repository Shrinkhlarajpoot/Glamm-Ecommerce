import "./Footer.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
const Footer = () => {
 const{auth}=useAuth()
  return (
    <div>
      <footer className="footer">
        <div className="footer__desp">
          Glam is an Cosmetics-ecomerce where you will find wide range of
          cosmetics and skincare for all skin type.
        </div>
        <div className="footer__links">
          <div className="footer__social">
            Links to follow
            <div className="footer_list">
              <li className="list_style">
                <Link className="Link_style2" to="/">
                  Home
                </Link>
              </li>
              <li className="list_style">
                <Link className="Link_style2"  to="/products">
                  Products
                </Link>
              </li>
              <li className="list_style">
                <Link className="Link_style2"   to={auth.token?"/profile":"/login"}>
                 {auth.token?"Profile":"Login"}
                </Link>
              </li>
            </div>
          </div>
          <div>
            Connect to Me
            <li className="list_style">
              <a
                className="Link_style2"
                href="https://github.com/Shrinkhlarajpoot"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list_style">
              <a
                className="Link_style2"
                href="https://www.linkedin.com/in/shrinkhla-rajpoot-aaa74b1a7/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="list_style">
              <a className="Link_style2" href="https://twitter.com/ShrinkhlaR">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </div>
        </div>
      </footer>
    </div>
  );
};
export { Footer };
