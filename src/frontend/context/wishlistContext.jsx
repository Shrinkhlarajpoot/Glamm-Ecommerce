import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getFromCartService, getFromWishlistService } from "../services";
import { useAuth } from "./authContext";
const wishlistContext = createContext();
const useWishlist = () => useContext(wishlistContext);
const WishlistProvider = ({ children }) => {
  const wishlistReducer = (state, action) => {
    switch (action.type) {
      case "SET_WISHLIST":
        return { ...state, wishlistProducts: action.payload };
      default:
        return state;
    }
  };
  const [wishlistLoading, setwishlistLoading] = useState(false);
  const [wishlist, wishlistdispatch] = useReducer(wishlistReducer, {
    wishlistProducts: [],
  });
  const { auth } = useAuth();

  useEffect(
    () =>
      (async () => {
        if (auth.isAuth) {
          setwishlistLoading(() => true);
          try {
            const res = await getFromWishlistService(auth.token);

            if (res.status === 200) {
              wishlistdispatch({
                type: "SET_WISHLIST",
                payload: res.data.wishlist,
              });
            }

            setwishlistLoading(() => false);
          } catch (err) {
            console.log(err);
          }
        }
      })(),
    [auth.isAuth]
  );
  return (
    <wishlistContext.Provider
      value={{ wishlist, wishlistLoading, wishlistdispatch }}
    >
      {children}
    </wishlistContext.Provider>
  );
};
export { useWishlist, WishlistProvider };
