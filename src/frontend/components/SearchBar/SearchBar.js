import { useProductListing } from "../../context/productListing-context";
import "./SearchBar.css";
const SearchBar = () => {
  const { productstate, productdispatch } = useProductListing();

  return (
    <div class="search__bar">
      <input
        type="text"
        placeholder="What are you looking for?"
        value={productstate.search}
        onChange={(e) => {
          productdispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          });
        }}
      />
    </div>
  );
};
export { SearchBar };
