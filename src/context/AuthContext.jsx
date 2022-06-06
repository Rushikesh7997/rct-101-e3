import React, { createContext, useState } from "react";
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {state}=useLocation()
  const navigate=useNavigate()
  const[isAuth,setIsAuth]=useState(false)
  const[input,setInput]=useState({
    email:"",
    password:""
  })
  const handleClick = (e) => {
    e.preventDefault()
    axios.post("https://reqres.in/api/login",{
      ...input
    })
    .then((r)=>r.data)
    .then((d)=>{
      console.log(d);
      if(state.from){
        navigate(state.from,{replace:true})
      }
      else{
        navigate("/")
      }
      
      setIsAuth(d)
      console.log(d.token);
    })


  }
  const logout = () => {
    setIsAuth(false)
  }
  const handleChange=(e)=>{
    const {name,value} = e.target
    setInput({
      ...input,
      [name]:value
    })
  }


  return <AuthContext.Provider value={{handleChange,logout,isAuth,handleClick}}>
    {children}
    </AuthContext.Provider>;
};