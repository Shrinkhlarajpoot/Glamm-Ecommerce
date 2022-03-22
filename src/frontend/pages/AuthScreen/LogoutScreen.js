import "./AuthScreen.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Footer } from "../../components/Footer/Footer";
const LogoutScreen = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    setAuth({
      token: "",
      isAuth: false,
    });
    navigate("/");
  };

  return (
    <div>
      <div className="auth__box">
        <img src="/assets/Categories/logout.png" className="logout__img" />
        <h3>
          Oh no! You're leaving...
          <br />
          Are you sure?
        </h3>
        <div className="auth__box-sub">
          <Link to="/login" className="Link_style">
            <h4 className="sub__main">NAAH,JUST KIDDING..LOG-IN</h4>
          </Link>
          <h4
            className="Link_style"
            className="sub__main2"
            onClick={() => logoutHandler()}
          >
            YES LOG ME OUT
          </h4>
        </div>
        <li>
          <i className="fa fa-close" onClick={() => navigate("/")}></i>
        </li>
      </div>
      <Footer />
    </div>
  );
};
export { LogoutScreen };
