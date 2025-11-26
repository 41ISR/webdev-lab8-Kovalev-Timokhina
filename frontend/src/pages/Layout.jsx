import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import "../styles/Layout.css"

const Layout = () => {
    return (
        <div className="container">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Layout