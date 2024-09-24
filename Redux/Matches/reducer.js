import {
  GET_MATCH_FAILURE,
  GET_MATCH_REQUEST,
  GET_MATCH_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  matches: [],
};

export const reducer = (state = initialState, action) => {
  // Complete the logic
  switch (action.type) {
    case GET_MATCH_REQUEST:
      return { isLoading: true, isError: false, matches: [] };
    case GET_MATCH_SUCCESS:
      return { isLoading: false, isError: false, matches: action.payload };
    case GET_MATCH_FAILURE:
      return { isLoading: false, isError: true, matches: [] };
    default:
      return state;
  }
};