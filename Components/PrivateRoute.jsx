import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const {isLoading, isError, isAuth, token} = useSelector((data)=>data.authReducer)
  if(isAuth){
    return children
  }
  return <Navigate to={'/login'}/>
};
