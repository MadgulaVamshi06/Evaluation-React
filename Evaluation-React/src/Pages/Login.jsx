import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";


const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("authToken", res.data.token);
      setIsLoggedIn(true);
      navigate("/product");
      setError("");
    } catch (error) {
      setError("failed to login");
    }
  };
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <form onSubmit={login}>
          <label htmlFor="Email">Enter Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <label htmlFor="Email">Enter Password</label>
          <input
            type="password"
            name=""
            id=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button colorScheme="blue" type="submit">
            Login
          </Button>
        </form>
      )}
    </>
  );
};

export default Login;
