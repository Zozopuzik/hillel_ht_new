import { SET_DATA, GET_CATEGORIES } from "./actions/productActions";

const initialState = {
  loading: true,
  data: [],
  categories: [],
};

let getCategories = (data) => {
  let categories = [];
  data.forEach((element) => {
    if (!categories.includes(element.category)) {
      categories.push(element.category);
    }
  });
  return categories;
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return { ...state, loading: false, data: payload };
    case GET_CATEGORIES:
      return { ...state, categories: getCategories(payload) };
    default:
      return state;
  }
};
