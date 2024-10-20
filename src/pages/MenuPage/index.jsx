import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import Footer from "../../components/Footer";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
    total: null,
    prevPage: null,
    nexPage: null,
  });
  const [search, setSearch] = useState("");

  const getMenuList = () => {
    axios
      .get(
        `https://api.mudoapi.site/menus?page=${pagination.page}&perPage=${pagination.perPage}&search=${search}`
      )
      .then((res) => {
        setMenu(res.data.data.Data);
        console.log(res);
        setPagination({
          page: res.data.data.currentPage,
          perPage: res.data.data.perPage,
          total: res.data.data.total,
          prevPage: res.data.data.previousPage,
          nexPage: res.data.data.nextPage,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.delete(
        `https://api.mudoapi.site/menu/${id}`,
        config
      );
      getMenuList();
    } catch (error) {
      console.log(error?.response);
    }
  };

  useEffect(() => {
    getMenuList();
  }, [pagination.page, search]);

  const handleNext = () => {
    setPagination({
      ...pagination,
      page: pagination.page + 1,
    });
  };

  const handleBack = () => {
    setPagination({
      ...pagination,
      page: pagination.page - 1,
    });
  };

  console.log(pagination);
  return (
    <div className="bg-gray-600">
      <Navbar />
      <h1>Home Page</h1>
      <p className="text-7xl text-center">Menu List</p>

      <div>
        <button
          className="w-20 h-10 text-white bg-black rounded mx-5"
          disabled={pagination.page === 1}
          onClick={handleBack}
        >
          back
        </button>
        <button
          className="w-20 h-10 text-white bg-black rounded"
          disabled={!pagination.nexPage}
          onClick={handleNext}
        >
          next
        </button>
      </div>
      {menu.map((item, idx) => {
        return (
          <div
            className="flex flex-col justify-center mx-auto items-center my-10"
            key={item.id}
            style={{ display: "flex", marginBottom: 40 }}
          >
            <p>{idx + 1}</p>
            <p className="text-2xl text-color-primary">{item.name}</p>
            <p>{item.priceFormatted}</p>
            <img
              className="w-32 h-32 rounded-full align-center"
              width={200}
              height={200}
              src={item.imageUrl}
              alt=""
            />
            <Link to={`/menu-detail/${item.id}`}>
              <button className="bg-green-300 text-black w-20 h-10 rounded my-5">
                detail
              </button>
            </Link>
            <button
              className="bg-red-500 text-black w-20 h-10 rounded"
              onClick={() => handleDelete(item.id)}
            >
              delete
            </button>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default MenuPage;
