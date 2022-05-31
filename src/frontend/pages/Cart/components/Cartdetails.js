import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cartContext";
import { Sumofprice, Sumoflength } from "../../../utils";
import "./Cartdetails.css";
const Cartdetails = () => {
  const { cart } = useCart();
  const navigate=useNavigate();
 const totalQuantityofitems = Sumoflength(cart.cartProducts);
 const totalPriceofitems = Sumofprice(cart.cartProducts);
console.log(cart)
  return (
    <div>
     <div className="details">
        <div className="details__heading">Total Price :{totalPriceofitems}</div>
        <div className="details__heading">
          Total No of Items : {totalQuantityofitems}
        </div>
      </div>
      <div className="details">
        <div className="details__heading">
          Discount(10% off) : -Rs {totalPriceofitems * (10 / 100)}
        </div>
        <div>
          <div className="details__content">
            <h5>Delivery</h5>
            <h5>FREE</h5>
          </div>
        </div>
        <div className="details">
          <div className="details__content">
            <h3>Total MRP</h3>
            <h3>Rs {totalPriceofitems - totalPriceofitems * (10 / 100)}</h3>
          </div>
        </div>
        <div className="details">
          <div className="cart__order" onClick={()=>
           navigate("/checkout")
          }>Proceed to Checkout</div>
        </div>
      </div>
    </div>
  );
};
export { Cartdetails };
