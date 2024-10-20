import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DetailMenuPage from "../pages/DetailMenuPage";
import MenuPage from "../pages/MenuPage";
import ProtectedRoute from "./ProtectedRoute";
import ListUser from "../pages/ListUser";

export const route = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <MenuPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/listuser",
    element: (
      <ProtectedRoute>
        <ListUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu-detail/:id",
    element: (
      <ProtectedRoute>
        <DetailMenuPage />
      </ProtectedRoute>
    ),
  },
];
