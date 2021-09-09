const initialState = {
  loading: true,
  items: [],
  error: null,
};

export const medications = (state = initialState, action) => {
  switch (action.type) {
    case "medications/get-all-medications/pending":
      return {
        ...state,
        loading: true,
      };
    case "medications/get-all-medications/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "medications/get-all-medications/rejected":
      return {
        ...state,
        error: action.json,
      };
    default:
      return state;
  }
};

export const getAllMedications = () => async (dispatch) => {
  dispatch({ type: "medications/get-all-medications/pending" });

  const response = await fetch("http://localhost:4000/medications");
  const json = await response.json();

  if (json.error) {
    dispatch({
      type: "medications/get-all-medications/rejected",
      error: json.error,
    });
  } else {
    dispatch({
      type: "medications/get-all-medications/fulfilled",
      payload: json,
    });
  }
};
