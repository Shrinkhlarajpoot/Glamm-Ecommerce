import "./Auth.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context";
import { loginService } from "../../services";
import { LoginValidChecker } from "../../utils";
import { Footer } from "../../components/Footer/Footer";
const Login = () => {
  const { showpassword, setShowPassword, setAuth } = useAuth();
 const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location= useLocation()
 
  console.log(errors);
  useEffect(() => {
    (async () => {
      if (submit && Object.values(errors).length === 0) {
        const token = await loginService(loginForm.email, loginForm.password);
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("isAuth", true);
          setAuth({
            token,
            isAuth: true,
          });

     
          navigate(location?.state?.from?.pathname, {replace: true});
         
        }
      }
    })();
  }, [errors]);
  const LoginHandler = async (e, email, password) => {
    e.preventDefault();
    setSubmit(true);
    setErrors(() => LoginValidChecker(loginForm));
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  return (
    <div>
      <form
        onSubmit={(e) => LoginHandler(e, loginForm.email, loginForm.password)}
      >
        <div className="auth__box">
          <i
            className="fa fa-close close "
            id="close"
            onClick={() => navigate("/home")}
          ></i>
          <h3>
            your account for everything
            <br />
            <span className="auth__logo">GLAM.</span>
          </h3>

          <div className="auth__inputs">
            <input
              type="email"
              placeholder="E-mail"
              required
              name="email"
              value={loginForm.email}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          {errors.email && (
            <div className="incorrect__pass">{errors.email}</div>
          )}
          <div className="auth__inputs">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={loginForm.password}
              required
              onChange={(e) => changeHandler(e)}
            />
            <i
              class={showpassword ? "fa fa-eye" : "fa fa-eye-slash"}
              aria-hidden="true"
              onClick={() => setShowPassword(!showpassword)}
            ></i>
          </div>
          {errors.password && (
            <div className="incorrect__pass">{errors.password}</div>
          )}

          <h4 className="login__reset Link_style">
            <a href="/Forget/Forget.html " class="Link_style">
              Forget Password?
            </a>
          </h4>

          <div className="auth__box-sub">
            <h4
              className="sub__main"
              onClick={(e) =>
                LoginHandler(e, loginForm.email, loginForm.password)
              }
            >
              LOGIN
            </h4>
            <h4
              className="sub__main2 Link_style"
              onClick={(e) =>
                setLoginForm({
                  ...loginForm,
                  email: "shrinkhla@gmail.com",
                  password: "S1234",
                })
              }
            >
              Login With test Credinetals
            </h4>
            <Link to="/signup" className="Link_style">
              <h4 className="sub__main2 ">Don't have an account? SIGN UP</h4>
            </Link>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export { Login};
