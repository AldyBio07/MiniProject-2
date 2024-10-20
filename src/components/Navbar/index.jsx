import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const token = localStorage.getItem("access_token");

  return (
    <div className="flex justify-center gap-5 ">
      <div></div>
      <Link to="/">
        <button className="w-20 h-10 mt-6 text-black bg-blue-300 rounded">
          Home
        </button>
      </Link>
      <Link to="/listuser">
        <button className="w-20 h-10 mt-6 text-black bg-blue-300 rounded">
          List User
        </button>
      </Link>
      {token ? (
        ""
      ) : (
        <Link to="/register">
          <button className="w-20 h-10 mt-6 text-black bg-blue-300 rounded">
            Register
          </button>
        </Link>
      )}

      {localStorage.getItem("access_token") ? (
        <button
          className="w-20 h-10 mt-6 text-black bg-red-300 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="w-20 h-10 mt-6 text-black bg-green-300 rounded">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
