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
    <div>
      <form onSubmit={handleEdit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={edit.name}
        ></input>
        <input
          onChange={handleChange}
          type="text"
          name="job"
          value={edit.job}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditPage;
