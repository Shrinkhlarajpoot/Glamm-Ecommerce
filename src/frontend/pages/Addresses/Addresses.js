import { useNavigate } from "react-router-dom";
import { AddressModal, Footer } from "../../components";
import { useAuth, useCart, useGlobal } from "../../context";
import { AddressCard } from "./components/AddressCard";
const Addresses = () =>{
 const {auth}=useAuth();
 const navigate = useNavigate();
 const {cart:{addressList}}=useCart();
 const {globalState,setGlobalState}=useGlobal();
  return(
        <div className="cart">
        <div className="profile_container">
         <div className="profile_page_options">
             <div onClick={()=>navigate("/profile")}>Profile</div>
             <div  onClick={()=>navigate("/orders")} >Orders</div>
             <div className="profile_selected-option">Addresses</div>
         </div>
         <div className="profile_details">
             <h4>Addresses</h4>
             <button className="logout-btn cart__order " onClick={()=>setGlobalState((prev)=>({...prev,isModalOpen:true}))}>Add Addresses</button>
             {addressList?.map((address)=>
             <AddressCard key={address._id} address={address}/>)}
          
        </div>
        {globalState?.isModalOpen ? <AddressModal/>:null}
        </div>
        
        </div>
    )
}
export {Addresses}