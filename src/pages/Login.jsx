import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  return (
    <div>
      <form>
       <input data-cy="login-email" />
       <input data-cy="login-password" />
       <button data-cy="login-submit"></button>
      </form>
    </div>
  );
};

export default Login;