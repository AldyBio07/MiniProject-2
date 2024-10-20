import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [form, setForm] = useState({
    name: "",
    job: "",
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
      name: form.name,
      job: form.job,
    };

    axios
      .post("https://reqres.in/api/users", payload)
      .then((res) => {
        setSuccess(true);
        setError(false);
        console.log(res);
        alert("Create Success");

        setTimeout(() => {
          navigate("/listuser");
        }, 3000);
      })
      .catch((err) => {
        console.log("err", err?.response);

        setSuccess("");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto mt-16">
        <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-md">
          <h1 className="mb-8 text-3xl font-bold text-center">Create User</h1>

          {success && (
            <div className="mb-4 text-center text-green-500">
              User created successfully!
            </div>
          )}
          {error && (
            <div className="mb-4 text-center text-red-500">{error}</div>
          )}

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="job"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Job
            </label>
            <input
              type="text"
              name="job"
              onChange={handleChange}
              placeholder="Enter your job"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 font-bold text-white transition-all bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

// protectedRoute
// Delete
// Create
