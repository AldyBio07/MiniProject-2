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
    <div>
      <Navbar />
      {success && <p>Create Success</p>}
      {error && <p>{error}</p>}
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input type="text" name="job" onChange={handleChange} placeholder="job" />

      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default Create;

// protectedRoute
// Delete
// Create
