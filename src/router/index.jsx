import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import ListFriend from "../pages/ListFriend/ListFriend";
import Matches from "../pages/Matches/Matches";
import Chat from "../pages/Chat/Chat";
import Settings from "../pages/Settings/Settings";
import FriendProfile from "../pages/ListFriend/FriendProfile/FriendProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/listfriend",
        element: <ListFriend />,
        children: [
          {
            path: "/listfriend/friendprofile",
            element: <FriendProfile />,
          },
        ],
      },
      {
        path: "/matches",
        element: <Matches />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);