import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Mainlayout/Root";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import PrivateRouts from "./PrivateRouts/PrivateRouts";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import TouristsSpotDetails from "../Pages/TouristsSpotDetails/TouristsSpotDetails";
import Mylist from "../Pages/MyList/Mylist";
import UpdateMySpot from "../Pages/UpdateMySpot/UpdateMySpot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/tourists-spot-all',
        element: <AllTouristsSpot />
      },
      {
        path: '/tourists-spot-details/:id',
        element: <PrivateRouts><TouristsSpotDetails /></PrivateRouts>
      },
      {
        path: '/add_tourists_spot',
        element: <PrivateRouts><AddTouristsSpot /></PrivateRouts>
      },
      {
        path: '/my-list',
        element: <PrivateRouts><Mylist/></PrivateRouts>
      },
      {
        path: '/update-my-spot/:id',
        element: <UpdateMySpot/>,
        loader: ({params}) => fetch(`http://localhost:5000/addTouristsSpot/${params.id}`)
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