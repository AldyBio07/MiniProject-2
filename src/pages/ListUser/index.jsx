/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const ListUser = () => {
  const [user, setUser] = useState([]);

  const [edit, setEdit] = useState({
    name: "",
    job: "",
  });

  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 3,
    total: null,
    total_pages: null,
    prevPage: null,
    nextPage: null,
  });

  const getUserList = () => {
    axios
      .get(
        `https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.per_page}`
      )
      .then((res) => {
        setUser(res.data.data);

        setPagination({
          page: res.data.page,
          per_page: res.data.per_page,
          total: res.data.total,
          total_pages: res.data.total_pages,
          prevPage: res.data.prev_page,
          nextPage: res.data.next_page,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://reqres.in/api/users/${id}`);
      getUserList();
      console.log(response);
      alert("Delete Success");
    } catch (error) {
      console.log(error?.response);
    }
  };

  const handleEdit = (id) => {
    axios.put(`https://reqres.in/api/users/${id}`);
  };

  useEffect(() => {
    getUserList();
  }, [pagination.page]);

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

  return (
    <div className="bg-gray-600">
      <Navbar />
      <p className="text-center text-7xl my-7">User List</p>

      <div className="flex justify-center">
        <button
          className="w-20 h-10 text-white bg-black rounded"
          disabled={pagination.page === 1}
          onClick={handleBack}
        >
          back
        </button>
        <h3 className="justify-center mx-5 text-3xl text-center align-center">
          {pagination.page}/{pagination.total_pages}
        </h3>
        <button
          className="w-20 h-10 text-white bg-black rounded"
          disabled={pagination.page === pagination.total_pages}
          onClick={handleNext}
        >
          next
        </button>
      </div>
      <div className="flex justify-center my-14">
        <Link to="/create">
          <button
            className="justify-center w-20 h-10 mx-5 text-white bg-black rounded align-center"
            onClick={handleEdit}
          >
            Add User
          </button>
        </Link>
      </div>

      <div className="justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {user.map((user, idx) => {
            return (
              <div
                className="flex flex-col items-center justify-center mx-auto my-10"
                key={user.id}
                style={{ display: "flex", marginBottom: 40 }}
              >
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
                <Link to={`/edit-user/${user.id}`}>
                  <button className="w-20 h-10 my-5 text-black bg-green-300 rounded">
                    edit
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListUser;
