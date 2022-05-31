import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context";
import "./OrderSummary.css";
export const OrderSummary = () => {
 const navigate =  useNavigate()
  const {
    cart: { orders },
  } = useCart();
  const {
    state: { orderId },
  } = useLocation();
  const order = orders.filter((currOrder) => currOrder.orderId === orderId);
  const { paymentId, amountPaid, orderedProducts, deliveryAddress } = order[0];
  
  const { name, street, city, state, country, zipCode, mobile } =
    deliveryAddress?.address;
  return (
    <div className="ordersummary">
      <h1 className="order_summary-title">Order Summary</h1>
      <div className="orders-fulldetails">
       
      <div className="ordersummary_details">
        <h2 class="order-title">Order Placed Successfully</h2>
          <h3>{`Payment ID : ${paymentId}`}</h3>
          <h3>{`Order ID : ${orderId}`}</h3>
          <h3>{`Amount Paid : ${amountPaid}`}</h3>
          <h5>Order will be delivered to : </h5>
          <h3>{name}</h3>
          <div>{`${street} ${city} ${state} ${country} - ${zipCode}`}</div>
          <div>{`Phone Number - ${mobile}`}</div>
        </div>
       
        <div className="orders_cards">
        {orderedProducts?.map((product) => 
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
      </div>
      </div>
    </div>
  );
};
