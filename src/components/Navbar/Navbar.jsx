import React from "react";
import { Link, useNavigate } from "react-router-dom";
// use react-router Link or NavLink
// const Link = <a />;
const navigate=useNavigate()
const handleLogInClick=()=>{
navigate("/login")
}
const Navbar = () => {
  return (
    <div data-cy="navbar" style={{padding:"10px" ,display:"flex",gap: "20px",justifycontent:"space-between" }}>
      <Link data-cy="navbar-home-link" style={{display:"flex",gap: "20px"}}>Home</Link>
      <span data-cy="navbar-cart-items-count" style={{display:"flex",gap: "20px"}}>{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onAuxClick={handleLogInClick}>Login</button>
    </div>
  );
};

export default Navbar;