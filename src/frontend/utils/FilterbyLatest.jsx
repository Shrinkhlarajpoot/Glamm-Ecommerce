const getLatestProducts = (products, latest) => {
  if (latest) {
    return [...products].filter((product) => product.isLatest);
  } else {
    return products;
  }
};

export { getLatestProducts  };
