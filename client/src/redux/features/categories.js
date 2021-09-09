const initialState = {
  loading: true,
  items: [],
  error: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "categories/get-all-categories/pending":
      return {
        ...state,
        loading: true,
      };
    case "categories/get-all-categories/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "categories/get-all-categories/rejected":
      return {
        ...state,
        error: action.json,
      };

    default:
      return state;
  }
};

export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: "categories/get-all-categories/pending" });

  const response = await fetch("http://localhost:4000/categories");
  const json = await response.json();

  if (json.error) {
    dispatch({
      type: "categories/get-all-categories/rejected",
      error: json.error,
    });
  } else {
    dispatch({
      type: "categories/get-all-categories/fulfilled",
      payload: json,
    });
  }
};
