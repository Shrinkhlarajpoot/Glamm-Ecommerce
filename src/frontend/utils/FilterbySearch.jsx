const getSearchedProducts = (products, searchItem) => {
  if (searchItem) {
   return  [...products].filter((product) =>(
      product.title.toLowerCase().includes(searchItem?.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchItem?.toLowerCase()) ||
      product.description.toLowerCase().includes(searchItem?.toLowerCase()))
     
    );
  } else {
    return products;
  }
};
export { getSearchedProducts };
