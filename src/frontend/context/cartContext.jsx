import { createContext, useContext, useEffect, useState } from "react";
import { getFromCartService } from "../services";
import { useAuth } from "./authContext";
const cartContext = createContext();
const useCart = () => useContext(cartContext);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    cartProducts:[],
  });
  const { auth } = useAuth();
  useEffect(
    () =>
      (async () => {
        console.log("in use effect");
        if (auth.isAuth) {
          try {
            const res = await getFromCartService(auth.token);

            if (res.status === 200)
              setCart((prev) => ({ ...prev, cartProducts:  res.data.cart} ));
          } catch (err) {
            console.log(err.response);
          }
        } else {
          setCart((prev) => ({ ...prev, cartProducts: [] }));
        }
      })(),
    [auth.isAuth]
  );
  return <cartContext.Provider value={{cart,setCart}}>{children}</cartContext.Provider>;
};
export { useCart, CartProvider };
