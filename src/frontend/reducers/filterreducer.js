let FilterInitialvalues = {
  sortBy: "",
  categories: {
    COSMETICS: false,
    SKINCARE: false,
    BABYCARE: false,
    PERFUMES: false,
  },
  ratings: 1,
  latest: false,
  maxPrice: 1000,
  excludeoutofstocks:true,
};
const FilterReducerFun = (state, action) => {
  switch (action.type) {
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "LATEST_PRODUCTS":
      return { ...state, latest: !state.latest };
      case "OUT_OF_STOCKS":
          return {...state,excludeoutofstocks:!state.excludeoutofstocks}
    case "COSMETICS":
      return {
        ...state,
        categories: {
          ...state.categories,
          COSMETICS: !state.categories.COSMETICS,
        },
      };
    case "SKINCARE":
      return {
        ...state,
        categories: {
          ...state.categories,
          SKINCARE: !state.categories.SKINCARE,
        },
      };
    case "BABYCARE":
      return {
        ...state,
        categories: {
          ...state.categories,
          BABYCARE: !state.categories.BABYCARE,
        },
      };
    case "PERFUMES":
      return {
        ...state,
        categories: {
          ...state.categories,
          PERFUMES: !state.categories.PERFUMES,
        },
      };

    case "FILTER_BY_PRICE":
      return { ...state, maxPrice: action.payload };
    case "FILTER_BY_RATINGS":
      return { ...state, ratings: action.payload };
    case "CLEAR":
      return {
        sortBy: "",
        categories: {
          COSMETICS: false,
          SKINCARE: false,
          BABYCARE: false,
          PERFUMES: false,
        },
        ratings: 1,
        latest: false,
        maxPrice: 1000,
      };
    default:
      return state;
  }
};

export { FilterInitialvalues, FilterReducerFun };
