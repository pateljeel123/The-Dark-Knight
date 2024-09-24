import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Redux/Authentication/actionTypes";

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {isLoading, isError, isAuth, token} = useSelector((data)=>data.authReducer)
  const dispatch = useDispatch()
  const submitForm = async () => {
    dispatch({type: LOGIN_REQUEST})
    try {
      let response = await axios.post(`https://reqres.in/api/login`, {email, password})
      dispatch({type: LOGIN_SUCCESS, payload:response.data.token})
      alert("You are login successfully.")
    } catch (error) {
      dispatch({type: LOGIN_FAILURE})
      console.log(error)
    }
  }
  return isLoading ? <h1>..Loading</h1> : (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
         />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        required
        name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={submitForm}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
