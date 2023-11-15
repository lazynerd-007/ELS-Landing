import { FooterData } from "../Navbar/NavbarData";
import Logo from '../../assets/Logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0C0C0C] text-[#E5E7EB] py-20 border-t border-[#D1D5DB]/40 laptop:px-10 tablet:px-5 px-4 bottom-0">
                <div className="p-4">
                    <div className="laptop:flex">
                        <div className="w-full -mx-6 laptop:w-2/5">
                            <div className="px-6">
                                <a href="#">
                                    <img src={Logo} className='' alt='Logo' />
                                </a>
                                <p className="max-w-sm mt-2 text-sm">
                                    © 2023. All rights reserved
                                </p>

                            </div>
                        </div>

                        <div className="mt-6 laptop:mt-0 laptop:flex-1">
                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-4">
                                <div className="">
                                    <h3 className="font-semibold text-[1.5rem] mb-2 text-[#EDE9FE]">
                                        Product
                                    </h3>
                                    <a className="block mt-2 link link-hover">Overview</a>
                                    <a className="block mt-2 link link-hover">Features</a>
                                    <a className="block mt-2 link link-hover">Tutorials</a>
                                    <a className="block mt-2 link link-hover">Pricing</a>
                                    <a className="block mt-2 link link-hover">Releases</a>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[1.5rem] mb-2 text-[#EDE9FE]">
                                        Company
                                    </h3>
                                    <a className="block mt-2 link link-hover">About</a>
                                    <a className="block mt-2 link link-hover">Press</a>
                                    <a className="block mt-2 link link-hover">Careers</a>
                                    <a className="block mt-2 link link-hover">Contact</a>
                                    <a className="block mt-2 link link-hover">Partners</a>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[1.5rem] mb-2 text-[#EDE9FE]">
                                        Support
                                    </h3>
                                    <a className="block mt-2 link link-hover">Help Center</a>
                                    <a className="block mt-2 link link-hover">Terms of Service</a>
                                    <a className="block mt-2 link link-hover">Legal</a>
                                    <a className="block mt-2 link link-hover">Privacy Policy</a>
                                    <a className="block mt-2 link link-hover">Status</a>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[1.5rem] mb-2 text-[#EDE9FE]">
                                        Follow Us
                                    </h3>
                                    <a className="block mt-2 link link-hover">Facebook</a>
                                    <a className="block mt-2 link link-hover">Twitter</a>
                                    <a className="block mt-2 link link-hover">Dribble</a>
                                    <a className="block mt-2 link link-hover">Instagram</a>
                                    <a className="block mt-2 link link-hover">LinkedIn</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer