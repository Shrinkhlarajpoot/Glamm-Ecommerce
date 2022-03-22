import { Navigate } from "react-router-dom";
import "./MainCard.css";
const MainCard = ({ products }) => {
  return (
    <div>
      {products.inStock ? (
        <div className="card card__vertical" key={products._id}>
          {products.isLatest && (
            <h4 className="card__vertical-title title" style={{ top: "-1rem" }}>
              NEW
            </h4>
          )}

          <div className="card__vertical-maincontent">
            <div className="card__vertical-img">
              <img src={products.img} alt={products.title} />
            </div>
            <div
              className="card__vertical-content"
              style={{ marginTop: "0px" }}
            >
              <h3>{products.title}</h3>
              <div>
                MRP :<i className="fas fa-rupee-sign"></i>
                {products.price}
              </div>
              <div>
                {products.rating} | 5
                <i className="fas fa-star rating__star"></i>
              </div>
              <div className="btn__pri" style={{ marginTop: "1.2rem" }}>
                Add To Cart
              </div>
              <div className="btn__sec">Add To WishList</div>
            </div>
          </div>
        </div>
      ) : (
        <div class="card__overlay-blur" key={products._id}>
          <div class=" card card__vertical card__overlay">
            <div class="card__vertical-maincontent">
              <div class="card__vertical-img">
                <img src={products.img} alt={products.title} />
              </div>
              <div class="card__vertical-content">
                <h3>{products.title}</h3>
                <div>
                  MRP :<i className="fas fa-rupee-sign"></i>
                  {products.price}
                </div>
                <div>
                  {products.rating} | 5
                  <i className="fas fa-star rating__star"></i>
                </div>
                <div
                  className="btn__pri"
                  style={{ marginTop: "1.2rem" }}
                  disabled
                  
                >
                  Add To Cart
                </div>
                <div className="btn__sec" disabled>
                  Add To WishList
                </div>
              </div>
            </div>
          </div>
          <h4 class="card__vertical-overlay overlay" style={{ left: "5rem" }}>
            OUT OF STOCK
          </h4>
        </div>
      )}
    </div>
  );
};
export { MainCard };
