import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shahed/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="mx-auto max-w-screen-2xl md:w-[85%] px-4 md:px-0">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;