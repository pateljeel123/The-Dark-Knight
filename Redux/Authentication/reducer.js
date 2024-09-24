import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { isLoading: true, isError: false, isAuth: false, token: "" };
    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        isAuth: true,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return { isLoading: false, isError: true, isAuth: false, token: "" };
    default:
      return state;
  }
  // complete the reducer
};
