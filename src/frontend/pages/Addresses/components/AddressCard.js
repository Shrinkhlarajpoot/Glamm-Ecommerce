import { useCart, useGlobal } from "../../../context";
import "../Address.css";
const AddressCard = ({address}) => {
const {removeAddress,editAddress} =useCart();
const {globalState,setGlobalState}=useGlobal();
  return (
    <div className="address-card">
     <h2>{address.name}</h2>
     <div>{address.street}</div>
     <div>{`${address.state}-${address.city}`}</div>
     <div>{`${address?.country}-${address?.zipCode}`}</div>
     <div>{`Phone Number - ${address.mobile}`}</div>
     <div className="address_modal-btn">
         <button className="dummy-btn" onClick={()=>{
            setGlobalState((prev)=>({...prev,isModalOpen:true,currAddress:address}))
         }}>Edit</button>
         <button className="dummy-btn2" onClick={()=>removeAddress(address)}>Delete</button>
         </div>
    </div>
  );
};
export {AddressCard}