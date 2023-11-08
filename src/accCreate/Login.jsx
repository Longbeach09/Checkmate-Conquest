import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Home from "./Home";
// import Register from "./Register";
const Login = (props) => {
  const redirect = useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    //make async when you want to go back
    // await axios
    //   .post("/Login", { email, password })
    //   .then((res) => {
    //     dispatch({
    //       type: "authenticated",
    //       payload: res.data.userId,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    e.preventDefault();
    console.log(username);
    redirect("/");
  };

  return (
    <>
      <h2>Login Page</h2>
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
