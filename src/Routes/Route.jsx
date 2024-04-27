import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Mainlayout/Root";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home/>
        },
      {
        path: '/add_tourists_spot',
        element: <AddTouristsSpot />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);