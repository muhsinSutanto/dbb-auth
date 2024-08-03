import Home from "./pages/Home";
import Login from "./pages/Login";
import UserDetail from "./pages/UserDetail";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="user-detail" element={<UserDetail />} />
    </Routes>
  );
};

export default App;
