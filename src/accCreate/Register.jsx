import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login press");
    await axios
      .post("/Register", {
        username: username,
        password: pass,
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        switch (res.data.message) {
          case "username was taken sucks to suck":
            alert(res.data.message);
            break;
          case "account created":
            dispatch({
              type: "authenticated",
              payload: res.data.userId,
            });
            break;
          default:
            alert("problem");
        }
        // dispatch({
        //   type: "authenticated",
        //   payload: res.data.userId,
        // });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(email);
    // redirect("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          id="username"
          placeholder="User Name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="yourEmail@gmail.com"
          id="email"
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
        <button type="submit">Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Already have a account? Login here{" "}
      </button>
    </>
  );
};

export default Register;
