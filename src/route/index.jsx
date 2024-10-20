import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DetailUser from "../pages/DetailUser";
import MenuPage from "../pages/MenuPage";
import ProtectedRoute from "./ProtectedRoute";
import ListUser from "../pages/ListUser";
import EditPage from "../pages/EditUser";
import CreateUser from "../pages/CreateUser";

export const route = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
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
    path: "/create",
    element: (
      <ProtectedRoute>
        <CreateUser />
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
    path: "/edit-user/:id",
    element: (
      <ProtectedRoute>
        <EditPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu-detail/:id",
    element: (
      <ProtectedRoute>
        <DetailUser />
      </ProtectedRoute>
    ),
  },
];
