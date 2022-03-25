import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getFromCartService } from "../services";
import { useAuth } from "./authContext";
const cartContext = createContext();
const useCart = () => useContext(cartContext);
const CartProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "SET_CART":
        return { ...state, cartProducts: action.payload };
      default:
        return state;
    }
  };
  const [cart, cartdispatch] = useReducer(cartReducer, {
    cartProducts: [],
  });
  const [cartLoading, setcartLoading] = useState(false);
  const { auth } = useAuth();
  useEffect(
    () =>
      (async () => {
        if (auth.isAuth) {
          try {
            setcartLoading(() => true);
            const res = await getFromCartService(auth.token);

            if (res.status === 200){
              cartdispatch({
                type: "SET_CART",
                payload: res.data.cart,
              });
            setcartLoading(() => false);
            }
          } catch (err) {
            console.log(err)
          }
        }
      })(),
    [auth.isAuth]
  );
  return (
    <cartContext.Provider value={{ cart, cartdispatch, cartLoading }}>
      {children}
    </cartContext.Provider>
  );
};
export { useCart, CartProvider };
