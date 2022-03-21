import "./HomeScreen.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Footer } from "../../components";
const HomeScreen = () => {
  const [data, setData] = useState([]);

  async function getCategories() {
    try {
      const response = await axios.get("/api/categories");
      const res = response.data.categories;
      setData(res);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => getCategories(), []);
  return (
    <div>
      <div className="template">
        <img src="https://images.pexels.com/photos/7825917/pexels-photo-7825917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
      <h4 className="main__heading">Featured Categories</h4>
      <div className="featured__cards">
        {data.map((item) => (
          <div className="card__feat" key={item.id}>
            <img src={item.img} alt="Cosmetics" className="img__feat" />
            <div className="card__featured-content">
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
      <h4 class="main__heading">LATEST COLLECTION</h4>
      <div class="card__latest-container"></div>
      <Footer />
    </div>
  );
};
export { HomeScreen };
