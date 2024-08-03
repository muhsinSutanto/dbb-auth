import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [menus, setMenus] = useState([]);

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

  useEffect(() => {
    getMenu();
  }, []);

  console.log("menu", menus);
  return (
    <div>
      <Navbar />
      <h1>ini halaman homepage</h1>
      {menus.map((menu) => {
        return (
          <div key={menu.id}>
            <p>{menu.name}</p>
            <p>{menu.priceFormatted}</p>
            <img width={200} height={200} src={menu.imageUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
