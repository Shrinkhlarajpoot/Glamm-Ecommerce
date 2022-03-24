import axios from "axios";
const getProducts = async () => {
  return await axios.get("/api/products");
};
export { getProducts };
