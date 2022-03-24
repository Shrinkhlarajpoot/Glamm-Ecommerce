import { Footer, MainCard, SearchBar } from "../../components";
import { Loader } from "../../components/Loader/Loader";
import { useProductListing } from "../../context/productListing-context";
import {
  getFilteredCatProducts,
  getLatestProducts,
  getOutofStocksProducts,
  getPricedProducts,
  getRatedProducts,
  getSortedProducts,
} from "../../utils";
import { FilterBar } from "./components/FilterBar";
import "./ProductScreen.css";
const ProductScreen = () => {
  const { products, productstate, productloading } = useProductListing();
  const outofStocks = getOutofStocksProducts(
    products,
    productstate.excludeoutofstocks
  );
  const sortedProducts = getSortedProducts(outofStocks, productstate.sortBy);
  const filteredProducts = getFilteredCatProducts(
    sortedProducts,
    productstate.categories.COSMETICS,
    productstate.categories.SKINCARE,
    productstate.categories.BABYCARE,
    productstate.categories.PERFUMES
  );

  const pricedProducts = getPricedProducts(
    filteredProducts,
    productstate.maxPrice
  );
  const ratedProducts = getRatedProducts(pricedProducts, productstate.ratings);
  const FinalfilteredProducts = getLatestProducts(
    ratedProducts,
    productstate.latest
  );

  return (
    <>
      {!productloading ? (
        <div>
          <SearchBar />
          <div className="container">
            <FilterBar />
            <main>
              <div className="card__container">
                {FinalfilteredProducts &&
                  FinalfilteredProducts.map((products) => (
                    <MainCard products={products} key={products._id} />
                  ))}
              </div>
            </main>
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export { ProductScreen };
