import { createBrowserRouter } from "react-router-dom";
import Headers from "./pages/Headers"
import Home from "./pages/Home"
import SearchFlight from "./pages/SearchFlight"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import FlightList from "./pages/FlightList"
import FlightTicketDetails from "./pages/FlightTicketDetails"
import FlightAllHistory from "./pages/FlightAllHistory"
import AppLayout from "./layout/AppLayout"
import AuthLayout from "./layout/AuthLayout"
import UnAuth from "./Auth/UnAuth"

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Headers />
      },
      {
        path: "/signup-page",
        element: <  SignUp />
      },
      {
        path: "/login-page",
        element: < Login />
      },
      {
        path: "/home-page",
        element: < Home />
      },
      {
        path: "/flightlist-page",
        element: < FlightList />
      },
      {
        path: "/searchflight-page",
        element: <  SearchFlight />
      },
      {
        path: "/flightticketdetails-page",
        element: < FlightTicketDetails />
      },
      {
        path: "/flightallhistory-page",
        element: < FlightAllHistory />
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "signup",
            element: <UnAuth><SignUp /></UnAuth>,
          },
          {
            path: "login",
            element: <UnAuth><Login /></UnAuth>,
          },
        ]
      }
    ]
  }
]
const router = createBrowserRouter(routes,{
  basename:'/Flight-Project'
});
export default router;
