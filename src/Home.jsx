import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const redirect = useNavigate();
  const uName = useSelector((state) => state.username);
  const getStarted = (e) => {
    e.preventDefault();
    redirect("/loginDisplay");
  };
  function handleComingSoon() {
    alert("sucks to suck ;)");
  }
  return (
    <div className="homePage">
      <h1 className="titleText">Checkmate Conquest</h1>
      <p className="welcomeText"> WELCOME {uName}</p>
      <button className="homeButton" onClick={getStarted}>
        Get started
      </button>
      <button className="homeButton" onClick={handleComingSoon}>
        coming soon
      </button>
      {/* <Outlet /> */}
    </div>
  );
};

export default Home;
