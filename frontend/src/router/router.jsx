import { createBrowserRouter } from "react-router-dom"
import Board from "../pages/Board"
import Logout from "../pages/Logout"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MyItems from "../pages/MyItems"
import Layout from "../pages/Layout"

export const router = createBrowserRouter(
    [
        {
            path:"/logout",
            element:<Logout />
        },
        {
            path:"/",
            element:<Layout/>,
            children:
            [
                {
                    path:"/board",
                    element:<Board />
                },
                {
                    path:"/items",
                    element:<MyItems/>
                }
            ]
        },
        {
            path:"/Login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register />
        }
    ]
)