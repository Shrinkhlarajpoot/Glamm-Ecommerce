import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context";
import { ValidChecker } from "../../utils";
import { signUpService } from "../../services";
const Signup = () => {
  const { auth, setAuth, showpassword, setShowPassword } = useAuth();
  const [showpassword1, setShowPassword1] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [errors, setErrors] = useState({});

  const [Form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (submit && Object.values(errors).length === 0) {
        const res = await signUpService(
          Form.firstname,
          Form.lastname,
          Form.email,
          Form.password
        );

        if (res) {
          localStorage.setItem("glamm-token", res.data.encodedToken);
          localStorage.setItem("isAuth", true);
          localStorage.setItem("glamm-user",JSON.stringify(res.data.foundUser))
          setAuth({
            token:res.data.encodedToken,
            isAuth: true,
            user:res.data.foundUser,
          });
          navigate("/login"); 
        }


        
      }
    })();
  }, [errors]);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setSubmit(true);
    setErrors(() => ValidChecker(Form));
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
  };

  return (
    <div>
      <form className="auth__box" onSubmit={(e) => SubmitHandler(e)}>
        <i className="fa fa-close" id="close" onClick={() => navigate("/")}></i>
        <h3>
          your account for everything
          <br />
          <span className="auth__logo">GLAM.</span>
        </h3>
        <div>Please Use Unique Mail ID</div>
        <div className="auth__inputs">
          <input
            type="text"
            placeholder="First-Name"
            required
            name="firstname"
            value={Form.firstname}
            onChange={(e) => changeHandler(e)}
          />
          {errors.firstname && (
            <div className="incorrect__pass">{errors.firstname}</div>
          )}
          <input
            type="text"
            placeholder="Last-Name"
            required
            name="lastname"
            value={Form.lastname}
            onChange={changeHandler}
          />
          {errors.lastname && (
            <div className="incorrect__pass">{errors.lastname}</div>
          )}
          <input
            type="email"
            placeholder="E-mail"
            required
            name="email"
            value={Form.email}
            onChange={(e) => changeHandler(e)}
          />
          {errors.email && (
            <div className="incorrect__pass">{errors.email}</div>
          )}
          <div className="auth__inputs">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Password"
              value={Form.password}
              required
              name="password"
              onChange={(e) => changeHandler(e)}
            />
            {errors.password && (
              <div className="incorrect__pass">{errors.password}</div>
            )}
            {errors.password1 && (
              <div className="incorrect__pass">{errors.password1}</div>
            )}
            <i
              class={showpassword ? "fa fa-eye" : "fa fa-eye-slash"}
              onClick={() => setShowPassword(!showpassword)}
            ></i>
          </div>
          <div className="auth__inputs">
            <input
              type={showpassword1 ? "text" : "password"}
              placeholder="Re-Password"
              name="confirmpassword"
              value={Form.confirmpassword}
              required
              onChange={(e) => changeHandler(e)}
            />
            {errors.confirmpassword && (
              <div className="incorrect__pass">{errors.confirmpassword}</div>
            )}
            {errors.passwordnotmatch && (
              <div className="incorrect__pass">{errors.passwordnotmatch}</div>
            )}
            <i
              class={showpassword1 ? "fa fa-eye" : "fa fa-eye-slash"}
              onClick={() => setShowPassword1(!showpassword1)}
            ></i>
          </div>
        </div>

        <div className="auth__box-sub">
          <button
            className="sub__main sub_main-btn"
            onClick={(e) => SubmitHandler(e)}
          >
            SIGNUP
          </button>
          <h4 className="sub__main2 ">
            <Link to="/login" className="Link_style">
              Already have an account? LOG-IN
            </Link>
          </h4>
        </div>
      </form>
     </div>
  );
};
export { Signup };
