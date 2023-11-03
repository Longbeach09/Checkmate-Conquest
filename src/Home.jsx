import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <button>Log in ?</button>
      <Outlet />
    </div>
  );
};

export default Home;
