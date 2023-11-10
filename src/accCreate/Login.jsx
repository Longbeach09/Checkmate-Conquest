import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
  const redirect = useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const uName = useSelector((state) => state.username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login press");
    await axios
      .post("/Login", {
        username: username,
        password: pass,
      })
      .then((res) => {
        switch (res.data.message) {
          case "No username found":
            alert(res.data.message);
            break;
          case "Password incorrect":
            alert(res.data.message);
            break;
          case "Login successful":
            dispatch({
              type: "authenticated",
              payload: res.data.username,
            });
            redirect("/");
            break;
          default:
            alert("problem");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(username);
    // redirect("/");
  };

  return (
    <>
      <h2>Login Page</h2>
      {/* userId: {uName ? uName : "None"} */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="your username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          name="password"
          placeholder="**********"
          id="password"
        />
        {/* <div>
          <a href="localhost:7777/"> */}
        {/* <Link to="/Home"> */}
        <button type="submit">Log In</button>
        {/* </Link> */}
        {/* </a>
        </div> */}
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Don't have a account? Register{" "}
      </button>
    </>
  );
};

export default Login;
