import axios from "axios";

const addToWishlistService = async (product, token) => {
  console.log("product", product);
  return await axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: token } }
  );
};
export{addToWishlistService}