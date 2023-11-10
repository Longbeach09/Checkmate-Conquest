import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Home = () => {
  const uName = useSelector((state) => state.username);
  return (
    <div>
      <h4>Home</h4>
      <p> WELCOME {uName}</p>
      <Outlet />
    </div>
  );
};

export default Home;
