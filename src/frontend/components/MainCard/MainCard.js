import "./MainCard.css";
const MainCard = () => {
  return (
    <div>
      <div className="card card__vertical">
        <h4 className="card__vertical-title title" style={{ top: "-1rem" }}>
          NEW
        </h4>

        <div className="card__vertical-maincontent">
          <div className="card__vertical-img">
            <img src="/assest/Products/baby1.webp" alt="" />
          </div>
          <div className="card__vertical-content" style={{ marginTop: "0px" }}>
            <h3>Baby Care</h3>
            <div>
              MRP: <i className="fas fa-rupee-sign"></i>900
            </div>
            <div>
              4 | 5<i className="far fa-star"></i>
            </div>
            <div className="btn__pri" style={{ marginTop: "1.2rem" }}>
              Add To Cart
            </div>
            <div className="btn__sec">Add To WishList</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { MainCard };
