import axios from "axios";
async function getProducts() {
  try {
    const response = await axios.get("/api/products");
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
}

export {getProducts}