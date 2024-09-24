import { ADD_TO_WATCHLIST } from "./actionTypes";

const initialState = {
  watchList: [],
}

export const reducer = (state=initialState, action) => {
  // Complete the logic
  switch(action.type){
    case ADD_TO_WATCHLIST:
      return { watchList: [...state.watchList, action.payload] }
    default:
      return state;
  }
};