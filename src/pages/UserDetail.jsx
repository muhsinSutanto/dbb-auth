import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetail = () => {
  const [menu, setMenu] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getMenu = () => {
    setLoading(true);
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => {
        console.log(res?.data?.data);
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err?.response);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  if (loading) {
    return <div>Loading data menu sedang di proses...</div>;
  }

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h1>ini halaman user</h1>
      <h1>{menu?.name}</h1>
      <p>{menu?.description}</p>
      <p>{menu?.priceFormatted}</p>
      <img width={200} src={menu?.imageUrl} />
    </div>
  );
};

export default UserDetail;
