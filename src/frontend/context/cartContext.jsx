import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addToCartService,
  getFromCartService,
  removeFromCartService,
} from "../services";

import { toast } from "react-toastify";
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
  const [cartloading, setCartLoading] = useState(false);
  useEffect(()=>{
    if(!auth.token){
      cartdispatch({
        type:"SET_CART",
        payload:[],
      })
    }

  },[auth.token])
  useEffect(
    () =>
      (async () => {
        if (auth.isAuth) {
          try {
            setcartLoading(() => true);
            const res = await getFromCartService(auth.token);

            if (res.status === 200) {
              cartdispatch({
                type: "SET_CART",
                payload: res.data.cart,
              });
              setcartLoading(() => false);
            }
          } catch (err) {
            console.log(err);
          }
        }
      })(),
    [auth.isAuth]
  );

  const addToCart = async (products) => {
    if (auth.isAuth) {
      setCartLoading(() => true);
      try {
        const res = await addToCartService(products, auth.token);
        if (res.status === 201) {
          cartdispatch({
            type: "SET_CART",
            payload: res.data.cart,
          });
          setCartLoading(() => false);
          toast.success(`${products.title} added to the cart`);
        }
      } catch (error) {
        console.log(error);
        toast.error(` Cannot add ${products.title}`);
      }
    }
  };
  const removeFromCart = async (product) => {
    const res = await removeFromCartService(product._id, auth.token);
    if (res.status === 200) {
      cartdispatch({
        type: "SET_CART",
        payload: res.data.cart,
      });
      toast.success(` ${product.title} removed from Cart`);
    } else {
      toast.error(`Cannot remove ${product.title}`);
    }
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        cartdispatch,
        cartLoading,
        addToCart,
        cartLoading,
        removeFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export { useCart, CartProvider };
