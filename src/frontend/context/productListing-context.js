import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import {
  FilterReducerFun,
  FilterInitialvalues,
} from "../reducers/filterreducer";
import { getProducts } from "../services";

const ProductListing = createContext();
const useProductListing = () => useContext(ProductListing);

const ProductProvider = ({ children }) => {
  const [productstate, productdispatch] = useReducer(
    FilterReducerFun,
    FilterInitialvalues
  );
  const [products, setProducts] = useState([]);
  const [productloading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(() => true);
        const res = await getProducts();
        if (res.status === 200) {
          setProducts(() => res.data.products);
          setLoading(() => false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  

  return (
    <ProductListing.Provider value={{ products, productstate, productloading,productdispatch }}>
      {children}
    </ProductListing.Provider>
  );
};
export { useProductListing, ProductProvider };
