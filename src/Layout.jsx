import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
// import Footer from "./Pages/Home/Footer"
// import ScrollButton from "./Components/ScrollToTop/ScrollToTop";


const Layout = () => {
    return (
        <section className="bg-[] text-white">
            <div>
                <Navbar />
            </div>

            <div className="">
                <Outlet />
            </div>

            <div className="">
                {/* <Footer /> */}
            </div>
            {/* <ScrollButton /> */}
        </section>
    );
};

export default Layout;
