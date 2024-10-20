/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const ListUser = () => {
  const [user, setUser] = useState([]);

  const [pagination, setPagination] = useState({
    page: 2,
    per_page: 6,
    total: null,
    prevPage: null,
    nexPage: null,
  });
  const [search, setSearch] = useState("");

  const getUserList = () => {
    axios
      .get(
        `https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.per_page}&search=${search}`
      )
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data);
        setPagination({
          page: res.data.data.currentPage,
          per_page: res.data.data.per_page,
          total: res.data.data.total,
          prevPage: res.data.data.previousPage,
          nexPage: res.data.data.nextPage,
        });
      })
      .catch((err) => {
        console.log(err.message);
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
      getUserList();
    } catch (error) {
      console.log(error?.response);
    }
  };

  useEffect(() => {
    getUserList();
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
      <p className="text-center text-7xl">User List</p>

      <div>
        <button
          className="w-20 h-10 mx-5 text-white bg-black rounded"
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
      {user.map((user, idx) => {
        return (
          <div
            className="flex flex-col items-center justify-center mx-auto my-10"
            key={user.id}
            style={{ display: "flex", marginBottom: 40 }}
          >
            <p>{idx + 1}</p>
            <p className="text-2xl text-color-primary">{`${user.first_name} ${user.last_name}`}</p>
            <p>{user.email}</p>
            <img
              className="w-32 h-32 rounded-full align-center"
              width={200}
              height={200}
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
            <Link to={`/menu-detail/${user.id}`}>
              <button className="w-20 h-10 my-5 text-black bg-green-300 rounded">
                detail
              </button>
            </Link>
            <button
              className="w-20 h-10 text-black bg-red-500 rounded"
              onClick={() => handleDelete(user.id)}
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

export default ListUser;
