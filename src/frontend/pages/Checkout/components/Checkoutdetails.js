import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cartContext";
import { Sumofprice, Sumoflength } from "../../../utils";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { addOrderService, removeFromCartService } from "../../../services";
import { useAuth } from "../../../context";
import { toast } from "react-toastify";
const Checkoutdetails = ({address}) => {
  const { cart:{cartProducts,orderDetails,addressList},cartdispatch,removeAllFromCart} = useCart();
  const {auth:{token}}=useAuth()
  const navigate=useNavigate();
  const totalQuantityofitems = Sumoflength(cartProducts);
  const totalPriceofitems = Sumofprice(cartProducts);
  const totalPayment = totalPriceofitems - totalPriceofitems * (10 / 100);
 function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}
async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        toast.error("Razorpay SDK failed to load. Are you online?");
        return;
    }
  
    const options = {
        
        key: process.env.REACT_APP_RAZORPAY_ID,
        currency: "INR",
        amount: totalPayment * 100,
        name: "Glamm",
        description: "Order for products",
      handler: async function (response) {
        const paymentId = response.razorpay_payment_id;
        const orderId = uuid();

        const order = {
            paymentId,
            orderId,
            amountPaid: totalPayment,
            orderedProducts: [...cartProducts],
            deliveryAddress: { address },
        };
        const res = await addOrderService(order, token);
				if (res.status === 201) {
					toast.success("Order Placed Successfully...")
					cartdispatch({
						type: "SET_ORDERS",
						payload: { orders: res.data.orders },
					});
					cartdispatch({
						type:"SET_ORDER",
						payload: { orderDetails: { orderId } },
					});
					cartdispatch({
						type: "SET_CART",
						payload: [],
					});
          cartProducts?.map((product)=>removeAllFromCart(product))
					navigate("/orderSummary", { state: { orderId } });
				}
			},
			prefill: {
				name:address?.name,
				email: "gaurav.kumar@example.com",
				contact: "9999999999",
			},
}

 const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

  return (
    <div>
      <div className="details">
          <h2>{`ORDER DETAILS (${cartProducts?.length} Items)`}</h2>
        <div className="checkoutdetails__heading">PURCHASED ITEMS</div>
        <div className="checkoutdetails__content">
          <div className="checkoutdetails__subtitle">Item</div>
          <div className="checkoutdetails__subtitle">Price</div>
        </div>
        {cartProducts.length>0 && cartProducts?.map((item)=>
        <div className="checkoutdetails__content" key={item._id}>
          <div className="checkoutdetailsdetails__content-sub">
              <div>{item?.title}</div>
              <div>{`${item?.qty} * Rs-${item?.price}`}</div>
          </div>
          <div>{item?.price}</div>
        </div>
        )}
      </div>
        
      <div className="details">
        <div className="checkoutdetails__heading">BILLING</div>
        <div className="checkoutdetails__content">
        <div>Total MRP</div>
        <div>{totalPriceofitems}</div>
        </div>
    
      <div className="checkoutdetails__content">
        <div>Total Discount</div>
        <div>{totalPriceofitems * (10 / 100)}</div>
        </div>
        
      <div className="checkoutdetails__content">
        <div>Delivery Fee</div>
        <div>Free</div>
        
      </div>
      <div className="checkoutdetails__content">
        <div>Total:</div>
        <div>{totalPriceofitems - totalPriceofitems * (10 / 100)}</div>
        
      </div>

      </div>
       
      <div className="details">
        <div className="checkoutdetails__heading">DELIVERING TO</div>
        <div className="checkoutdetails__content-address">
        <div className="address-owner-title">{address?.name}</div>
        <div>{`${address?.street} ${address?.city} ${address?.state} ${address?.country} ${address?.zipCode}`}</div>
        <div>{`Phone Number- ${address?.mobile}`}</div>
        </div>
      
      <div className="details">
          <div className="cart__order" onClick={displayRazorpay}>Proceed to Pay</div>
        </div>
      </div>
    </div>
  );
};
export { Checkoutdetails };