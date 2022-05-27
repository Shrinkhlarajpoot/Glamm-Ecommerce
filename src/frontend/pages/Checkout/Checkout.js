import { Checkoutdetails } from "./components/Checkoutdetails"
import "./Checkout.css";
import { useCart, useGlobal } from "../../context";
import { AddressModal } from "../../components";
import { useState } from "react";
export const Checkout = () =>{
const {cart:{addressList}}=useCart();
const {globalState,setGlobalState}=useGlobal();
const [ address,setAddress] = useState(addressList[0])
    return (
    <div className="checkout">
        <div className="checkout_address-list">
            {addressList?.map((address)=>
            <div className="checkout-address" key={address._id}>
                <input type="radio" name="address" onChange={()=>setAddress(address)}></input>
                <div>
                    <h3>{address?.name}</h3>
                    <div>{address?.street}</div>
                    <div>{`${address.state}-${address?.city}`}</div>
                    <div>{`${address?.country}-${address?.zipCode}`}</div>
                    <div>{`Phone Number - ${address?.mobile}`}</div> 
                </div>
            </div>)}
            <button className="checkout_newaddress" onClick={()=>setGlobalState((prev)=>({...prev,isModalOpen:true}))}>Add Addresses</button>

            </div>
     

        <Checkoutdetails address={address}/>
        {globalState?.isModalOpen?<AddressModal/>:null}
    </div>
    )
}
