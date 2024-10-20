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
        setError(err?.response.data.message);
        setSuccess("");
      });
  };

  return (
    <div>
      <Navbar />
      {success && <p>Register Success</p>}
      {error && <p>{error}</p>}
      <input
        type="test"
        value={form.email}
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        value={form.password}
        name="password"
        onChange={handleChange}
        placeholder="password"
      />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;

// protectedRoute
// Delete
// Create
