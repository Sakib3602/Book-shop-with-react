import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const MainHome = () => {
    return (
        <div className="w-[1270px] m-auto work">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainHome;