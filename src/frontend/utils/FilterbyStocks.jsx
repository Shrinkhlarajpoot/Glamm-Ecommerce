const getOutofStocksProducts = (products, stocks) => {
  if (stocks) {
    return [...products].filter((product) => product.inStock === true);
  } else {
    return products;
  }
};
export { getOutofStocksProducts };
