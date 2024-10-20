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
    <nav className="py-4 bg-gray-800 shadow-lg">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <div className="text-2xl font-semibold text-white">
          <Link to="/">Aldy</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/">
            <button className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">
              Home
            </button>
          </Link>
          <Link to="/listuser">
            <button className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">
              User List
            </button>
          </Link>
          {!token && (
            <Link to="/register">
              <button className="px-4 py-2 text-white transition duration-300 bg-yellow-500 rounded hover:bg-yellow-600">
                Register
              </button>
            </Link>
          )}
          {token ? (
            <button
              className="px-4 py-2 text-white transition duration-300 bg-red-500 rounded hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 text-white transition duration-300 bg-green-500 rounded hover:bg-green-600">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
