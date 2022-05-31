import {useNavigate } from "react-router-dom";
import { Footer } from "../../components";
import { useAuth } from "../../context";
import "./Profile.css";
const Profile = () =>{
 const {auth}=useAuth();
 const navigate = useNavigate();
    return(
        <div className="cart">
        <div className="profile_container">
         <div className="profile_page_options">
             <div className="profile_selected-option">Profile</div>
             <div onClick={()=>navigate("/orders")}>Orders</div>
             <div onClick={()=>navigate("/addresses")}>Addresses</div>
         </div>
         <div className="profile_details">
             <h4>Profile Details</h4>
             <div className="profile_details-detail">
                 <div>Full Name</div>
                 <div>{`${auth?.user?.firstName} - ${auth?.user?.lastName}`}</div>
             </div>
             <div className="profile_details-detail">
                 <div>Email</div>
                 <div>{auth?.user?.email}</div>
             </div>
             <button className="logout-btn cart__order " onClick={()=>navigate("/logout")}>Log Out</button>
         </div>
         </div>
     
        </div>
    )
}
export {Profile}