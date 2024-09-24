import axios from "axios";
import React, { useEffect, useState } from "react";
import { MatchCard } from "./MatchCard";
import { useDispatch, useSelector } from "react-redux";
import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "../Redux/Matches/actionTypes";
import { ADD_TO_WATCHLIST } from "../Redux/WatchList/actionTypes";
import { getMatches } from "../Redux/Matches/action";
import { useSearchParams } from "react-router-dom";

export const MatchList = () => {
  const {isLoading,isError, matches} = useSelector((data)=>data.matchReducer)
  const {watchList} = useSelector((data)=>data.watchListReducer)
  
  let [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page")
  const order = searchParams.get("order")
  const dispatch = useDispatch()
  const paramObj = {
    params:{
      _limit: 10,
      _page: page,
      _order:order,
      _sort: "year",
    }
  }
const addWatchListHandle = async (id) =>{
  try {
    let response = await axios.get(`http://localhost:8080/matches/${id}`)
      dispatch({type: ADD_TO_WATCHLIST, payload: response.data})
  } catch (error) {
    console.log(error)
  }
}
  useEffect(()=>{
    dispatch(getMatches(paramObj))
  },[page, order])
  return isLoading ? <h1>...Loading</h1> : ( <div data-testid="match-list" style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap:"20px"}}>
    {/* // Show matches here  */}
    {
      matches.map((match)=><MatchCard key={match.id} match={match} addWatchListHandle={addWatchListHandle} />)
    }
  </div>)
};
