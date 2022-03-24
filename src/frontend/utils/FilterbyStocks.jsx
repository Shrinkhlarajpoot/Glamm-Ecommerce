const getOutofStocksProducts = (products, stocks) => {
  console.log(products)
  if (stocks) {
    return [...products].filter((product) => product.inStock === true);
  } else {
    return products;
  }
};
export { getOutofStocksProducts };
