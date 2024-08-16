import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "./Component/Error";
import Home from "./Component/Home";
import Login from "./Component/Authentication/Login";
import Register from "./Component/Authentication/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
     children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
      ]
    },
  ]);