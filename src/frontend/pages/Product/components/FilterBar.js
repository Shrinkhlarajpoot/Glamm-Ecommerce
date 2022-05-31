
import { useProductListing } from "../../../context";
import "./FilterBar.css";
const FilterBar = ({showFilter}) => {

  const { productstate, productdispatch } = useProductListing();
  return (
 
    <div>
     <div className="sidebar" id={showFilter?"showFilter":"hidefilter"}> 
        <div class="filter__heading">
          <h4>Filters</h4>
          <h5
            className="clearfilter"
            onClick={() => {
              productdispatch({
                type: "CLEAR",
              });
            }}
          >
            Clear
          </h5>
        </div>
        <div class="filter__price">
          <h4 className="filter__subheading">
            Price <br />
            Value: Rs: {productstate.maxPrice} & below
          </h4>
          <div class="slider__input">
            <input
              type="range"
              min="100"
              max="1000"
              step="100"
              class="slider"
              value={productstate.maxPrice}
              onChange={(e) => {
                productdispatch({
                  type: "FILTER_BY_PRICE",
                  payload: e.target.value,
                });
              }}
            />
            <p class="min__value">100</p>
            <p class="max__value">1000</p>
          </div>
        </div>
        <div class="Sorting__price">
          <h4 className="filter__subheading">Sorting</h4>
          <div>
            <label>
              <input
                type="radio"
                name="sort"
                id="low_to_high"
                checked={productstate.sortBy === "LOW_TO_HIGH"}
                onChange={() => {
                  productdispatch({
                    type: "LOW_TO_HIGH",
                  });
                }}
              />
              Low To High
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="sort"
                id="high_to_low"
                checked={productstate.sortBy === "HIGH_TO_LOW"}
                onChange={() => {
                  productdispatch({
                    type: "HIGH_TO_LOW",
                  });
                }}
              />
              High to Low
            </label>
          </div>
        </div>
        <div class="latest__products">
          <h4 className="filter__subheading">Latest_Products</h4>
          <div>
            <label>
              <input
                type="checkbox"
                checked={productstate.latest}
                onChange={() => {
                  productdispatch({
                    type: "LATEST_PRODUCTS",
                  });
                }}
              />
              Only Latest Products
            </label>
          </div>
        </div>
        <div class="outofstocks__products">
          <h4 className="filter__subheading">Out_of_stocks</h4>
          <div>
            <label>
              <input
                type="checkbox"
                checked={productstate.excludeoutofstocks}
                onChange={() => {
                  productdispatch({
                    type: "OUT_OF_STOCKS",
                  });
                }}
              />
              Exclude out 0f stocks
            </label>
          </div>
        </div>

        <div class="filter__categories">
          <h4 className="filter__subheading">Category</h4>

          <label>
            <input
              type="checkbox"
              checked={productstate.categories.COSMETICS}
              onChange={() => {
                productdispatch({
                  type: "COSMETICS",
                });
              }}
            />
            Cosmetics
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              checked={productstate.categories.SKINCARE}
              onChange={() => {
                productdispatch({
                  type: "SKINCARE",
                });
              }}
            />
            SkinCare
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              checked={productstate.categories.BABYCARE}
              onChange={() => {
                productdispatch({
                  type: "BABYCARE",
                });
              }}
            />
            BabyCare
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              checked={productstate.categories.PERFUMES}
              onChange={() => {
                productdispatch({
                  type: "PERFUMES",
                });
              }}
            />
            Perfumes
          </label>
          <br />
        </div>
        <div class="filter__ratings">
          <h4 className="filter__subheading">Ratings</h4>

        
          <br />

          <label>
            <input
              type="radio"
              name="ratings"
              value="4"
              checked={productstate.ratings === 4}
              onChange={(e) => {
                productdispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: Number(e.target.value),
                });
              }}
            />
            4 stars and above
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="ratings"
              value="3"
              checked={productstate.ratings === 3}
              onChange={(e) => {
                productdispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: Number(e.target.value),
                });
              }}
            />
            3 stars and above
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="ratings"
              value="2"
              checked={productstate.ratings === 2}
              onChange={(e) => {
                productdispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: Number(e.target.value),
                });
              }}
            />
            2 stars and above
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="ratings"
              value="1"
              checked={productstate.ratings === 1}
              onChange={(e) => {
                productdispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: Number(e.target.value),
                });
              }}
            />
            1 stars and above
          </label>
          <br />
        </div>
      </div>

    </div>
            
            
  );
};
export { FilterBar };
