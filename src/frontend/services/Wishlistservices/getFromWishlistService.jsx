import axios from "axios";
const getFromWishlistService = async (token) => {
  return await axios.get("/api/user/wishlist", {
    headers: { authorization: token },
  });
};

export { getFromWishlistService };
