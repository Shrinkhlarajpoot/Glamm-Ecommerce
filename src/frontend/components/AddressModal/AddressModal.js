import { useState,useEffect } from "react";
import { useCart, useGlobal } from "../../context";
import "./AddressModal.css";
const AddressModal = () => {
const {globalState,setGlobalState}=useGlobal();
const {addAddress,editAddress}=useCart()
const [formValues, setFormValues] = useState(globalState.currAddress);
useEffect(() => {
    setFormValues(globalState.currAddress);
}, [globalState?.currAddress]);
const changeHandler = (e) => {
    console.log("call me")
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
};
const resetForm = () =>{
    setGlobalState((prev) => ({
			...prev,
			isModalOpen: false,
			currAddress: {
				name: "",
				street: "",
				city: "",
				state: "",
				country: "",
				zipCode: "",
				mobile: "",
			},
		})
        );
	};

const SubmitHandler = (e) =>{
    e.preventDefault();
    globalState?.currAddress?._id? editAddress(formValues):addAddress(formValues);
    resetForm();
}
const dummyData = {
    name: "Shrinkhla",
    street: "Street - 8673",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    zipCode: "786943",
    mobile: "915555554",
}
 return (
    
    <div className="address-modal">
      <form className="address_form-detail"  onSubmit={(e)=>SubmitHandler(e)}>
          <h3>Add Address</h3>
        <input placeholder="Enter Name" required value={formValues?.name} name="name" onChange={changeHandler}></input>
        <input placeholder="Enter House No , Building No"required name="street" value={formValues?.street} onChange={changeHandler}  ></input>
        <input placeholder="Enter City" value={formValues?.city} name="city" required onChange={changeHandler}  ></input>
        <input placeholder="Enter State"value={formValues?.state} name="state" required onChange={changeHandler} ></input>
        <input placeholder="Pincode" value={formValues?.zipCode} name="zipCode" required onChange={changeHandler}></input>
        <select name="country" className="select_input" required  value={formValues?.country} onChange={changeHandler} >
          <option>India</option>
          <option>China</option>
          <option>Japan</option>
          <option>Korea</option>
        </select>
        <input placeholder="Enter Phone number" type="number" name="mobile" value={formValues?.mobile} onChange={changeHandler}  ></input>
        <div className="address_modal-btn">
         <button className="dummy-btn" type="submit">Save</button>
         <button className="dummy-btn2" onClick={()=>setGlobalState((prev)=>({...prev,isModalOpen:false}))}>Cancel</button>
        </div>
        <button className="logout-btn cart__order" onClick={()=>setGlobalState((prev)=>({...prev,currAddress:dummyData}))}>Enter dummy values</button>
      </form>
    </div> 
  );
};
export {AddressModal}
