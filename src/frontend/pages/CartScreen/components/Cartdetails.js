import "./Cartdetails.css";
const Cartdetails = () => {
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
        <div className="details__heading">Total Price :Rs12000</div>
        <div className="details__heading">Total No of Items :5</div>
      </div>
      <div className="details">
        <div className="details__heading"></div>
        <div>
          <div className="details__content">
            <h5>Delivery</h5>
            <h5>FREE</h5>
          </div>
        </div>
        <div className="details">
          <div className="details__content">
            <h3>Total MRP</h3>
            <h3>Rs 4000</h3>
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
