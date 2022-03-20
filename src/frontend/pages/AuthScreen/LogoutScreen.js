import "./AuthScreen.css";
import {Link, useNavigate } from "react-router-dom";
const LogoutScreen=()=>{
   return(
        <div className="auth__box">
              <img src="/assets/Categories/logout.png" className="logout__img"/>
              <h3>Oh no! You're leaving...<br/>Are you sure?</h3>
            <div className="auth__box-sub">
                <Link to="/signin"  className="Link_style"><h4 className="sub__main">NAAH,JUST KIDDING..LOG-IN</h4></Link>
                <h4  className="Link_style" className="sub__main2" 
                >YES LOG ME OUT</h4>
            </div>
            <li><i className="fa fa-close"></i></li>
        </div>
    )
}
export {LogoutScreen}