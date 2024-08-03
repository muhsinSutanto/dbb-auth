import Navbar from "../components/Navbar";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(userName, password);
  };

  return (
    <div>
      <Navbar />
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
