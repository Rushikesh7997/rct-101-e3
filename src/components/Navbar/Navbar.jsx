
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink


const Navbar = () => {
  const navigate = useNavigate()
  let Container = styled.div`
       `
     let Section = styled.div`
       `

  const {handleAuth}= useContext(AuthContext)
  function handleSubmit(){
    handleAuth(false)
    navigate('/login')
  }
 const{cart} = useContext(CartContext)
 const {cartItemCount} = useContext(CartContext)
 
  return (
    <Container data-cy="navbar">
      <Section> <Link data-cy="navbar-home-link" to="/" className='plain-text'>HOME</Link> </Section>
      <span data-cy="navbar-cart-items-count">{cartItemCount}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=>{handleSubmit()}}>Logout</button>
    </Container>
  );
};

export default Navbar;

