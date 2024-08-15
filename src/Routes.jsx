import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "./Component/Error";
import Home from "./Component/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
     children:[
        {
            path:'/',
            element:<Home></Home>
        },
      ]
    },
  ]);