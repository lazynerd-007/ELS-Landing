import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import NavDropdown from "./NavDropdown";


const Navbar = () => {

    return (
        <div className="">
            <div className="navbar bg-opacity-60 backdrop-blur-md z-50 fixed top-0 bg-[#0C0C0C]/5 text-white py-4 laptop:px-12 tablet:px-5 px-4">
                {/* border-b border-[#D1D5DB]/40 */}
                <div className="navbar-start">
                    <a className="text-4xl font-black">LOGO</a>
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
