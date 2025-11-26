import { createBrowserRouter } from "react-router-dom"
import Board from "../pages/Board"
import Logout from "../pages/Logout"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MyItems from "../pages/MyItems"
import Layout from "../pages/Layout"
import CreateItem from "../pages/CreateItem"
import MyBids from "../pages/MyBids"

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
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register />
        },
        {
            path:"/create-item",
            element:<CreateItem />
        },
        {
            path:"/my-bids",
            element:<MyBids />
        }


    ]
)