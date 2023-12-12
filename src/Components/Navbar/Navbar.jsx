import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import NavDropdown from "./NavDropdown";
import Logo from "../../assets/ELS-LOGO-PNG-2B.png"


const Navbar = () => {

    return (
        <div className="">
            <div className="navbar bg-opacity-60 backdrop-blur-sm z-50 fixed top-0 bg-transparent text-white py-2 laptop:px-12 tablet:px-8 px-4">
                <div className="navbar-start">
                    <Link to="/" className="">
                        <img src={Logo} className="laptop:w-[12%] tablet:w-1/6 w-1/4" alt="ELS Logo" />
                    </Link>
                </div>
                <div className="navbar-end hidden laptop:flex">
                    {NavbarData.map((item, index) => (
                        <ul key={index}
                            className="px-3">
                            <li>
                                <a href={item.bookmark}
                                    className="text-base">
                                    {item.title}
                                </a>
                            </li>
                        </ul>
                    ))}
                </div>

                <div className="navbar-end laptop:hidden">
                    <NavDropdown />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
