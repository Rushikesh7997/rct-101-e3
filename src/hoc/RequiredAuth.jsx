import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, Navigate } from 'react-router-dom';

const RequiredAuth = ({ children }) => {
  const {isAuth}=useContext(AuthContext)
  const{pathname}=useLocation()
  if(isAuth){
    return children;
  }
  else{
    return (
      <Navigate to="/login"
      state={{from:pathname}}
      replace
      />
    )
  }
  
};

export default RequiredAuth;