import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addAddressService,
  addToCartService,
  getAddressListService,
  getFromCartService,
  getOrdersService,
  removeAddressService,
  removeFromCartService,
  updateAddressService,
} from "../services";

import toast from "react-hot-toast";
import { useAuth } from "./authContext";
const cartContext = createContext();
const useCart = () => useContext(cartContext);
const CartProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "SET_CART":
        return { ...state, cartProducts: action.payload };
      case "SET_ADDRESSLIST":
        return {...state,addressList:action.payload.addressList};
      case "SET_ORDER":
        return {...state,ordersDetails:action.payload.ordersDetails}
        case "SET_ORDERS":
          return {
            ...state,
            orders: [...action.payload.orders],
          };
      default:
        return state;
    }
  };
  
  const [cart, cartdispatch] = useReducer(cartReducer, {
    cartProducts: [],
    addressList:[],
     ordersDetails: {
			cartItemsTotal: "",
			cartItemsDiscountTotal: "",
      cartItemsDiscount: "",
			orderAddress: "",
		},
    orders:[],

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
            const res = await getAddressListService(auth.token);
            console.log(res.data.addressList,"from cartcontext")

            if (res.status === 200) {
              cartdispatch({
                type: "SET_ADDRESSLIST",
                payload:{
                  addressList:res.data.addressList
                } 
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
  useEffect(
    () =>
      (async () => {
        if (auth.isAuth) {
          try {
            setcartLoading(() => true);
            const res = await getOrdersService(auth.token);

            if (res.status === 200) {
              cartdispatch({
                type: "SET_ORDERS",
                payload: { orders: res.data.orders },
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
  const removeAllFromCart = async (product) => {
    const res = await removeFromCartService(product._id, auth.token);
    if (res.status === 200) {
      cartdispatch({
        type: "SET_CART",
        payload: res.data.cart,
      });
    
    } 
  };

  const addAddress = async (address) => {
    if (auth.isAuth) {
      setCartLoading(() => true);
      try {
        const res = await addAddressService(address, auth.token);
        if (res.status === 201) {
          cartdispatch({
            type: "SET_ADDRESSLIST",
            payload:{
              addressList:res.data.addressList
            } 
          });
          setCartLoading(() => false);
          toast.success("Address Added Successfully");
        }
      } catch (error) {
        console.log(error);
        toast.error("Try Again Later");
      }
    }
  };
  const removeAddress = async (address) => {
    const res = await removeAddressService(address, auth.token);
    if (res.status === 200) {
      cartdispatch({
        type: "SET_ADDRESSLIST",
        payload:{
          addressList:res.data.addressList
        } 
      });
      toast.success("Address Removed");
    } else {
      toast.error("Try Again Later");
    }
  };
 const editAddress = async(address) =>{
   const res = await updateAddressService(address,auth.token);
   if (res.status === 200) {
    cartdispatch({
      type: "SET_ADDRESSLIST",
      payload:{
        addressList:res.data.addressList
      } 
    });
    toast.success("Address Updated");
  } else {
    toast.error("Try Again Later");
  }
 }

  return (
    <cartContext.Provider
      value={{
        cart,
        cartdispatch,
        cartLoading,
        addToCart,
        cartLoading,
        removeFromCart,
        removeAllFromCart,
        addAddress,
        removeAddress,
        editAddress,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export { useCart, CartProvider };
