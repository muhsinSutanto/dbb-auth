import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  const getMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        setMenus(res.data.data.Data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleLogout = () => {
    // api logout
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    getMenu();
  }, []);

  const isLogedin = localStorage.getItem("access_token");

  return (
    <div>
      <Navbar />
      {isLogedin !== null && <button onClick={handleLogout}>logout</button>}

      <h1>ini halaman homepage</h1>
      {menus.map((menu) => {
        return (
          <div key={menu.id}>
            <Link to={`/user-detail/${menu.id}`}>
              <p>{menu.name}</p>
              <p>{menu.priceFormatted}</p>
              <img width={200} height={200} src={menu.imageUrl} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
