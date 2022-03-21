const getRatedProducts = (products, rating) => {
  console.log("hello");

  return [...products].filter((product) => product.rating >= rating);
};
export { getRatedProducts};
