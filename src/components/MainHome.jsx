import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


const MainHome = () => {
    return (
        <div>
            <div className="w-[1270px] m-auto work">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default MainHome;