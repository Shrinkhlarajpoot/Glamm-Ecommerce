import "./CartCard.css";
const CartCard = ({ product }) => {
  return (
    <div className="card__hori2">
      <i className="fa fa-close"></i>
      <div className="card__hori2-maincontent">
        <img
          src="/assets/Products/baby1.webp"
          alt=""
          className="card__hori2-img"
        />
        <div className="card__hori2-content">
          <h4>S-Beauty Mascara</h4>
          <div>
            MRP: <i className="fas fa-rupee-sign"></i>250
          </div>
          <div>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <div className="count">
              <button>+</button>
              <span>5</span>
              <button>-</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hori2__btn">
        <div className="btn__pri">Add to WishList</div>
      </div>
    </div>
  );
};
export { CartCard };
