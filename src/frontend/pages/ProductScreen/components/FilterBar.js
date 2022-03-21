import "./FilterBar.css";
const FilterBar = () => {
  return (
    <div class="sidebar">
      <div class="filter__heading">
        <h4>Filters</h4>
        <h5 className="clearfilter">Clear</h5>
      </div>
      <div class="filter__price">
        <h4 className="filter__subheading">
          Price <br />
          Value: Rs: 1000 & below
        </h4>
        <div class="slider__input">
          <input type="range" min="100" max="1000" step="100" class="slider" />
          <p class="min__value">100</p>
          <p class="max__value">1000</p>
        </div>
      </div>
      <div class="Sorting__price">
        <h4 className="filter__subheading">Sorting</h4>
        <div>
          <label>
            <input type="radio" name="sort" id="low_to_high" />
            Low To High
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="sort" id="high_to_low" />
            High to Low
          </label>
        </div>
      </div>
      <div class="latest__products">
        <h4 className="filter__subheading">Latest_Products</h4>
        <div>
          <label>
            <input type="checkbox" />
            Only Latest Products
          </label>
        </div>
      </div>

      <div class="filter__categories">
        <h4 className="filter__subheading">Category</h4>

        <label>
          <input type="checkbox" />
          Cosmetics
        </label>
        <br />

        <label>
          <input type="checkbox" />
          SkinCare
        </label>
        <br />

        <label>
          <input type="checkbox" />
          BabyCare
        </label>
        <br />

        <label>
          <input type="checkbox" />
          Perfumes
        </label>
        <br />
      </div>
      <div class="filter__ratings">
        <h4 className="filter__subheading">Ratings</h4>

        <label>
          <input type="radio" name="ratings" value="5" />5 stars and above
        </label>
        <br />

        <label>
          <input type="radio" name="ratings" value="4" />4 stars and above
        </label>
        <br />

        <label>
          <input type="radio" name="ratings" value="3" />3 stars and above
        </label>
        <br />

        <label>
          <input type="radio" name="ratings" value="2" />2 stars and above
        </label>
        <br />
        <label>
          <input type="radio" name="ratings" value="1" />1 stars and above
        </label>
        <br />
      </div>
    </div>
  );
};
export { FilterBar };
