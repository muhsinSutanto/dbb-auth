import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      userName: userName,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        console.log(res);
        setSuccess(res?.data?.message);
        localStorage.setItem("access_token", res?.data?.data?.token);
        setError("");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err?.response?.data?.message);
        setSuccess("");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      navigate("/");
      console.log("test");
    }
  }, []);

  return (
    <div>
      <Navbar />
      {success.length ? <p style={{ color: "green" }}>{success}</p> : null}
      {error.length ? <p style={{ color: "red" }}>{error}</p> : null}
      <h1>ini login page</h1>
      <div>
        <label>username</label>
        <input
          onChange={handleChangeUserName}
          type="text"
          placeholder="username"
        />
        <label>password</label>
        <input
          onChange={handleChangePassword}
          type="text"
          placeholder="password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
