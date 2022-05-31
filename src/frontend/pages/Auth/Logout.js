import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import toast from "react-hot-toast";
const Logout = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("glamm-token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("glamm-user");
    toast.success("Logged Out sucessfully");
    setAuth({
      token: "",
      isAuth: false,
      user: "",
    });
    navigate("/");
  };

  return (
    <div>
      <div className="auth__box">
        <i className="fa fa-close" id="close" onClick={() => navigate("/")}></i>
        <img src="/assets/Categories/logout.png" className="logout__img" />
        <h3>
          Oh no! You're leaving...
          <br />
          Are you sure?
        </h3>
        <div className="auth__box-sub">
          <div className="Link_style">
            <h4 className="sub__main" onClick={() => navigate(-1)}>
              NAAH,JUST KIDDING..GO BACK
            </h4>
          </div>
          <h4 className="Link_style sub__main2" onClick={() => logoutHandler()}>
            YES LOG ME OUT
          </h4>
        </div>
      </div>
    </div>
  );
};
export { Logout };
