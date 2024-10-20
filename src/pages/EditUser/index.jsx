import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const [edit, setEdit] = useState({
    name: "",
    job: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const handleData = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setEdit({
          name: res.data.data.first_name,
          job: res.data.data.email,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const payload = {
      name: edit.name,
      job: edit.job,
    };

    axios
      .put(`https://reqres.in/api/users/${id}`, payload)
      .then((res) => {
        console.log(res);
        alert("Edit Success");
        navigate("/listuser");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.error);
      });
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-center">Edit User</h1>
        <form onSubmit={handleEdit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={edit.name}
              onChange={handleChange}
              placeholder="Enter new name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="job"
              className="block mb-2 font-semibold text-gray-700"
            >
              Job
            </label>
            <input
              type="text"
              name="job"
              value={edit.job}
              onChange={handleChange}
              placeholder="Enter new job"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
