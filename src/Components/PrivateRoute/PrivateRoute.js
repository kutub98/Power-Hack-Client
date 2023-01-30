import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useToken from "../Hooks/userToken";




const PrivateRoute = ({ children }) => {
    const [token]= useToken()
    const getToken = localStorage.getItem('AccessToken', token)
    const location = useLocation()

  if (getToken) {
    return children
  }
  return <Navigate to="/home" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;
