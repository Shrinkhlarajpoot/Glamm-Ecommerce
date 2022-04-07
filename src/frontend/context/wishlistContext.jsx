import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addToWishlistService,
  getFromWishlistService,
  removeFromWishlistService,
} from "../services";

import { toast } from "react-toastify";
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

  useEffect(()=>{
    if(!auth.token){
      wishlistdispatch({
        type:"SET_WISHLIST",
        payload:[],
      })
    }

  },[auth.token])

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
  const addToWishlist = async (products) => {
    if (auth.isAuth) {
      setwishlistLoading(() => true);
      try {
        const res = await addToWishlistService(products, auth.token);
        if (res.status === 201) {
          wishlistdispatch({
            type: "SET_WISHLIST",
            payload: res.data.wishlist,
          });
          setwishlistLoading(() => false);
          toast.success(`${products.title} added to the wishlist`);
        }
      } catch (error) {
        toast.error(` Cannot add ${products.title}`);
      }
    }
  };
  const deleteFromWishlist = async (products) => {
    const res = await removeFromWishlistService(products._id, auth.token);
    if (res.status === 200) {
      wishlistdispatch({
        type: "SET_WISHLIST",
        payload: res.data.wishlist,
      });
      toast.success(`${products.title} removed from wishlist`);
    } else {
      toast.error(` Cannot delete ${products.title}`);
    }
  };
  return (
    <wishlistContext.Provider
      value={{
        wishlist,
        wishlistLoading,
        wishlistdispatch,
        addToWishlist,
        deleteFromWishlist,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};
export { useWishlist, WishlistProvider };
