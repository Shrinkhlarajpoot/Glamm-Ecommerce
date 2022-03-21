const getPricedProducts = (products, maxPrice) => {
  console.log(maxPrice);

  return [...products].filter((product) => product.price <= maxPrice);
};
export { getPricedProducts };
