import { Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Layout from "../layout/Layout";
import Details from "../pages/Details";
import Home from "../pages/Home";

const routes = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Navigate to="home" replace />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/products',
        element: <Details></Details>
      }
    ]
  },
];

export default routes;


