
import { createBrowserRouter } from "react-router";

import Landing from "./features/landing/pages/Landing.jsx";
import Login from "./features/auth/pages/login.jsx";
import Register from "./features/auth/pages/Register.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
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
    path: "/signup",
    element: <Register />,
  },
]);