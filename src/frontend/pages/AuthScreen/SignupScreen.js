import "./AuthScreen.css";
import { Link, useNavigate } from "react-router-dom";
const SignupScreen = () => {
  return (
    <div>
      <div className="auth__box">
        <h3>
          your account for everything
          <br />
          <span className="auth__logo">GLAM.</span>
        </h3>
        <div className="auth__inputs">
          <input type="text" placeholder="Username" className="username" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Password" />
        </div>
        <div className="auth__box-sub">
          <h4 className="sub__main">SIGNUP</h4>
          <h4 className="sub__main2 ">
            <Link to="/login" className="Link_style">
              Already have an account? LOG-IN
            </Link>
          </h4>
        </div>
        <li>
          <i className="fa fa-close"></i>
        </li>
      </div>
    </div>
  );
};
export { SignupScreen };
