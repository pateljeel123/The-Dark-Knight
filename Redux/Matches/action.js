import axios from "axios";
import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes";

export const getMatches = (paramObj) => async (dispatch) => {
  // Complete the logic
  dispatch({type:GET_MATCH_REQUEST})
    try {
      let response = await axios.get(`http://localhost:8080/matches`, {
        params: paramObj.params
      })
      console.log(response.data)
      dispatch({type:GET_MATCH_SUCCESS, payload: response.data})
      // setMatchData(response.data)
    } catch (error) {
      dispatch({type:GET_MATCH_FAILURE})
      console.log(error)
    }
};
