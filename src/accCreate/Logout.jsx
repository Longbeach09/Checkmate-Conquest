import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   await axios.get("/Logout");

  //   if (res.data) {
  //     console.log(res.data);
  //   }

  const logoutHandler = async () => {
    await axios.get("/Logout");
    console.log("logout");
    dispatch({
      type: "logout",
    });
    navigate("/");
  };

  return (
    <div>
      <Button onClick={logoutHandler}>logout?</Button>
    </div>
  );
};

export default Logout;
