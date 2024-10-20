import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const DetailUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const getDetailMenu = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailMenu();
  }, []);

  return (
    <div>
      <Navbar />
      {/* Breadcrumb */}
      <div className="flex justify-center gap-5 my-10 h-9 bg-slate-600">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="/listuser"
                  className="text-sm font-medium text-gray-300 ms-1 hover:text-white md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  User List
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-200 ms-1 md:ms-2 dark:text-gray-400">
                  {user?.first_name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* User Card */}
      <div className="flex items-center justify-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="object-cover w-48 h-48 mx-auto rounded-full"
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
          />
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {user.first_name} {user.last_name}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
