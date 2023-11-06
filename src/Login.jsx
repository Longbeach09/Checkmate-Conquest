import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";
const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          {/* <Link to="/Home"> */}
          <button type="submit">Submit</button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
