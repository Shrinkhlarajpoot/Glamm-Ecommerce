import { useProductListing } from "../../context";
import { debounce } from "../../utils";
import "./SearchBar.css";
const SearchBar = () => {
  const { productstate, productdispatch } = useProductListing();
  const searchHandler = (e) =>{
    
    productdispatch({
      type: "FILTER_BY_SEARCH",
      payload:e.target.value
    })
  }

  return (
    <div class="search__bar">
      <input
        type="text"
        placeholder="What are you looking for?"
        onChange={debounce(searchHandler)
        }
      />
    </div>
   
  );
};
export { SearchBar };
