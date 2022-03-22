const getFilteredCatProducts = (
  sortedproducts,
  COSMETICS,
  SKINCARE,
  BABYCARE,
  PERFUMES
) => {
  const filteredlist = [];
  if (
    COSMETICS === false &&
    SKINCARE === false &&
    BABYCARE === false &&
    PERFUMES === false
  ) {
    return sortedproducts;
  }
  if (COSMETICS) {
    let newList = sortedproducts.filter(
      (prod) => prod.categoryName === "cosmetics"
    );
    filteredlist.push(...newList);
  }
  if (SKINCARE) {
    let newList = sortedproducts.filter(
      (prod) => prod.categoryName === "skincare"
    );
    filteredlist.push(...newList);
  }
  if (BABYCARE) {
    let newList = sortedproducts.filter(
      (prod) => prod.categoryName === "babycare"
    );
    filteredlist.push(...newList);
  }
  if (PERFUMES) {
    let newList = sortedproducts.filter(
      (prod) => prod.categoryName === "perfumes"
    );
    filteredlist.push(...newList);
  }
  return filteredlist;
};

export { getFilteredCatProducts };
