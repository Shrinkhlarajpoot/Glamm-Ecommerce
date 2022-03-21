import { createContext, useContext, useState,useEffect, useReducer} from "react";
import axios from "axios";
import { FilterReducerFun, FilterInitialvalues } from "../reducers/filterreducer";
import { getProducts } from "../services";

const ProductListing = createContext();
const useProductListing=()=>useContext(ProductListing);

const ProductProvider=({children})=>{
    const[productstate,productdispatch]=useReducer(FilterReducerFun,FilterInitialvalues)
    const[products,setProducts]=useState([])
    useEffect(() =>{
        (async()=>{
     const product  = await  getProducts()
     setProducts(product)
          })()
  
    }, []);

  return(
        <ProductListing.Provider value={{products,productstate,productdispatch}}>
            {children}
        </ProductListing.Provider>
    )
}
export {useProductListing,ProductProvider}