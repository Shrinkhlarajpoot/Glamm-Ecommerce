const getPricedProducts = (products, maxPrice) => {
  return [...products].filter((product) => product.price <= maxPrice);
};
export { getPricedProducts };
