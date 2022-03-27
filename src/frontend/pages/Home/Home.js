import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Footer, MainCard ,Loader} from "../../components";
import { useProductListing } from "../../context";
import { getLatestProducts } from "../../utils";
import { toast } from "react-toastify";
const Home= () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { products, productdispatch, productloading } = useProductListing();
  const Latestproducts = getLatestProducts(products, true);

  async function getCategories() {
    try {
      const response = await axios.get("/api/categories");
      const res = response.data.categories;
      setData(res);
    } catch (error) {
      toast.error("Couldn't load category..Try again later");
    }
  }
  useEffect(() => getCategories(), []);
  const featureCardHandler = (category) => {
    console.log("comingg");
    productdispatch({
      type: "CLEAR",
    });
    console.log(category);
    navigate("/products");
    productdispatch({
      type: `${category}`,
    });
  };
  return (
    <>
      {!productloading ? (
        <div>
          <div className="template">
            <img src="https://www.skincare.com/-/media/images/loreal/skincare/articles/featured-images/970-gigi-hadid-maybelline-makeup.jpg?h=575&la=en&w=970" />
            <div className="template__content">
              <h2 className="temp__head--main">WELCOME TO GLAM </h2>
              <h3>LATEST COLLECTION</h3>
              <div className="template__shop">
                <Link to="/products" className="Link_style">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div class="services">
            <div>
              <i
                class="fa fa-shipping-fast"
                style={{ color: "var(--primary-color)", fontSize: "3rem" }}
              ></i>
              <h3>Fast Delivery</h3>
            </div>
            <div>
              <i
                class="fa fa-check"
                aria-hidden="true"
                style={{ color: "var(--primary-color)", fontSize: "3rem" }}
              ></i>
              <h3>Money Back gurantee</h3>
            </div>
            <div>
              <i
                class="fa fa-credit-card"
                aria-hidden="true"
                style={{ color: "var(--primary-color)", fontSize: "3rem" }}
              ></i>
              <h3>Secure Payment</h3>
            </div>
          </div>

          <h4 className="main__heading">Featured Categories</h4>
          <div className="featured__cards">
            {data.map((item) => (
              <div
                className="card__feat"
                key={item.id}
                onClick={() =>
                  featureCardHandler(item.categoryName.toUpperCase())
                }
              >
                <img src={item.img} alt="Cosmetics" className="img__feat" />
                <div className="card__featured-content">
                  <h4>{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <h4 className="main__heading">LATEST COLLECTION</h4>
          <div className="card__latest-container">
            {Latestproducts.map((products) => (
              <MainCard products={products} key={products._id} />
            ))}
          </div>
          <h1 className="quote">LOVING YOUR SKIN ISN'T VANITY IT'S SANITY</h1>
          <h3 className="quote__owner">DR.HOWARD MURAD</h3>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export { Home};
