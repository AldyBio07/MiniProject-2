import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const payload = {
      ...form,
      roleId: parseInt(form.roleId),
    };

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        const token = res?.data?.data?.token;
        localStorage.setItem("access_token", token);

        setSuccess(true);
        setError(false);

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        console.log("err", err?.response);
        setError(true);
        alert(err?.response.data.error);
        setSuccess("");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="w-full max-w-md p-6 mx-auto mt-5 bg-white rounded-lg shadow-md">
        <div className="mb-5">
          {success && (
            <h1 className="mb-4 text-xl font-bold text-center text-green-500">
              Register Success
            </h1>
          )}
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Email
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
              type="text"
              value={form.email}
              name="email"
              onChange={handleChange}
              placeholder="email"
            />
          </label>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Password
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
              type="password"
              value={form.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </label>

          <button
            className="w-full items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

// protectedRoute
// Delete
// Create
