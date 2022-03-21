import { Footer, SearchBar } from "../../components";
import { FilterBar } from "./components/FilterBar";
import "./ProductScreen.css";
const ProductScreen = () => {
  return (
    <div>
      <SearchBar />

      <div className="container">
        <FilterBar />
        <main>
          <div className="card__container"></div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export { ProductScreen };
