import { useNavigate } from "react-router-dom";
import { Footer } from "../../components";
import { useAuth, useCart } from "../../context";
const Orders = () =>{
 const {auth}=useAuth();
 const {cart:{orders}}=useCart();
 const navigate = useNavigate();
 console.log(orders.orderedProducts)
    return(
        <div className="cart">
        <div className="profile_container">
         <div className="profile_page_options">
             <div onClick={()=>navigate("/profile")}>Profile</div>
             <div className="profile_selected-option" >Orders</div>
             <div onClick={()=>navigate("/addresses")}>Addresses</div>
         </div>
         <div className="profile_details">
             <h4>Orders</h4>
             <div className="profile_details-detail">
                 {orders?.length>0? 
                 orders?.map((order)=>
                 <div className="orders_cards">
                <div><span className="orders_cards-t" >PaymentId</span> - {order?.paymentId}</div>
                <div><span className="orders_cards-t" >OrderId</span> - {order?.orderId}</div>
                <div><span className="orders_cards-t" >Total Amount </span>{` Rs:- ${order?.amountPaid}`}</div>
                 {order?.orderedProducts?.map((product) => 
                   <div className="card__hori2 card_summary" key={product._id}>
                     <div className="card__hori2-maincontent">
                       <img
                         src={product.img[0]}
                         alt={product.title}
                         className="card__hori2-img"
                       />
         
                       <div className="card__hori2-content">
                         <h3 className="product__details">{product.title}</h3>
                         <div className="product__details">
                           MRP: <i className="fas fa-rupee-sign "></i>
                           {product.price}
                         </div>
                         <div className="product__details">
                           {`Quantity - ${product.qty}`}
                         </div>
                       </div>
                     </div>
                   </div>
                 )}
               </div>)
                 :<div>No Orders Placed Yet...</div>}
               </div>
         </div>
        </div>
     
        </div>
    )
}
export {Orders}