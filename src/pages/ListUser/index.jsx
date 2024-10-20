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
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <p className="text-6xl font-bold text-center text-gray-800 my-7">
        User List
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center my-5 space-x-6">
        <button
          className={`w-24 h-10 text-white rounded-full transition-all ${
            pagination.page === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
          disabled={pagination.page === 1}
          onClick={handleBack}
        >
          Back
        </button>
        <span className="text-2xl text-gray-800">
          {pagination.page}/{pagination.total_pages}
        </span>
        <button
          className={`w-24 h-10 text-white rounded-full transition-all ${
            pagination.page === pagination.total_pages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
          disabled={pagination.page === pagination.total_pages}
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      {/* Add User Button */}
      <div className="flex justify-center my-10">
        <Link to="/create">
          <button className="w-40 h-12 text-white transition-all bg-indigo-600 rounded-lg hover:bg-indigo-800">
            Add User
          </button>
        </Link>
      </div>

      {/* User Cards Grid */}
      <div className="container px-4 py-6 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {user.map((user) => (
            <div
              key={user.id}
              className="p-6 transition-all bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <img
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <h2 className="text-xl font-semibold text-center text-gray-800">
                {`${user.first_name} ${user.last_name}`}
              </h2>
              <p className="text-center text-gray-500">{user.email}</p>
              <div className="flex justify-around mt-6">
                <Link to={`/menu-detail/${user.id}`}>
                  <button className="w-24 h-10 text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-700">
                    Detail
                  </button>
                </Link>
                <Link to={`/edit-user/${user.id}`}>
                  <button className="w-24 h-10 text-white transition-all bg-green-500 rounded-lg hover:bg-green-700">
                    Edit
                  </button>
                </Link>
                <button
                  className="w-24 h-10 text-white transition-all bg-red-500 rounded-lg hover:bg-red-700"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListUser;
