import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Mainlayout/Root";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/Register/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/add_tourists_spot',
            element: <AddTouristsSpot/>
        },
        {
            path: '/login',
            element: <LoginPage/>
        },
        {
        path: '/register',
        element: <Register/>
        }
      ]
    },
  ]);