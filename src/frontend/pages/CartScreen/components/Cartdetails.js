import { useCart } from "../../../context/cartContext";
import { Sumofprice, Sumoflength } from "../../../utils";
import "./Cartdetails.css";
const Cartdetails = () => {
  const { cart } = useCart();
  console.log(cart.cartProducts, "hello");
  let totalQuantityofitems;
  let totalPriceofitems;
 
  if (cart.cartProducts.length > 0) {
    totalQuantityofitems = Sumoflength(cart.cartProducts);
    totalPriceofitems = Sumofprice(cart.cartProducts);
  } else {
    totalQuantityofitems = 0;
    totalPriceofitems = 0;
  }

  return (
    <div>
      <div className="details">
        <div className="details__heading">COUPONS</div>
        <div className="details__content">
          <h5>Apply Coupons</h5>
          <h5 className="coupan">Apply</h5>
        </div>
      </div>
      <div className="details">
        <div className="details__heading">Total Price :{totalPriceofitems}</div>
        <div className="details__heading">
          Total No of Items : {totalQuantityofitems}
        </div>
      </div>
      <div className="details">
        <div className="details__heading">
          Discount(10% off) : -Rs {totalPriceofitems * (8 / 100)}
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
            <h3>Rs {totalPriceofitems - totalPriceofitems * (8 / 100)}</h3>
          </div>
        </div>
        <div className="details">
          <div className="cart__order">Proceed to Checkout</div>
        </div>
      </div>
    </div>
  );
};
export { Cartdetails };
