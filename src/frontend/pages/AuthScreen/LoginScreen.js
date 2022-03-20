import "./AuthScreen.css"
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
const LoginScreen=()=>{
    const [showError,setShowError]=useState()
    return(
        
        <form>
            
            <div className="auth__box">
            <h3>your account for everything<br/><span className="auth__logo">GLAM.</span></h3>
            <h4 className="auth__error">{showError&&"Invalid email & password"}</h4>
            
            <div className="auth__inputs">
               
                <input type="text"
                 placeholder="E-mail"/>
                <input type="text"
                 placeholder="Password" />
          </div>
           <div className="incorrect__pass">Incorrect Password</div>
           <h4  className="login__reset Link_style"><a href="/Forget/Forget.html " class="Link_style">Forget Password?</a></h4>
       
            <div className="auth__box-sub">
                <h4 className="sub__main" >LOGIN</h4>
               <h4 className="sub__main2 Link_style">Login With test Credinetals</h4>
                <Link to="/signup" className="Link_style"><h4 className="sub__main2 ">Don't have an account? SIGN UP</h4></Link>
            </div>
            <li><i className="fa fa-close"></i></li>
        </div>
      
        </form>
    )
}
export {LoginScreen}