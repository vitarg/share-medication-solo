const initialState = {
  signingUp: false,
  signingIn: false,
  token: null,
  error: null,
};

export const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "application/sign-up/pending":
      return {
        ...state,
        signingUp: true,
      };
    case "application/sign-up/fulfilled":
      return {
        ...state,
        signingUp: false,
        error: null,
      };
    case "application/sign-up/rejected":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const registration = (name, login, password) => async (dispatch) => {
  dispatch({ type: "application/sign-up/pending" });

  const response = await fetch("http://localhost:4000/registration", {
    method: "POST",
    body: JSON.stringify({ name, login, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = response.json();

  if (json.error) {
    dispatch({ type: "application/sign-up/rejected", error: json.error });
  } else {
    dispatch({ type: "application/sign-up/fulfilled", payload: json });
  }
};
