import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    redirect("/");
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
        {/* <div>
          <a href="localhost:7777/"> */}
        {/* <Link to="/Home"> */}
        <button type="submit">Log In</button>
        {/* </Link> */}
        {/* </a>
        </div> */}
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Already have a account? Login here{" "}
      </button>
    </>
  );
};

export default Register;
