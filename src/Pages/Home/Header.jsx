import Sedan from "../../assets/sedann.png"
import SUVs from "../../assets/suv.png"
import Vans from "../../assets/van.png"
import ColorBlocks from "../../assets/color blocks.png"
import { Link } from "react-router-dom"
import Video from "../../assets/ELS.mp4"

const Header = () => {
    return (
        <div>
            {/* <section className="relative pt-20 tablet:bg-hero-bg bg-cover min-h-screen bg-center"> */}
            <section className="relative pt-20 h-screen">
                {/* video bg */}
                <div className="absolute inset-0 z-0">
                    <video
                        className="w-full h-screen object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                {/* intro */}
                <div className="z-50 laptop:px-12 tablet:px-8 px-4 pt-12 mx-auto">
                    <div className="laptop:col-span-7 w-max backdrop-blur-sm">
                        <img src={ColorBlocks} className='mb-4' alt='color-blocks' />
                        <h1
                            className="mb-5 text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-none font-black">
                            Embark on a journey of <br />
                            opulence
                        </h1>
                        <p className="max-w-2xl mb-6 font-light laptop:leading-[2rem] text-white laptop:mb-8 tablet:text-lg laptop:text-[1.225rem]">
                            Every Detail Crafted for the Discerning Connoisseur. <br />
                            Indulge in Timeless Sophistication, Where Luxury is <br />
                            not a Choice, but a Lifestyle.
                        </p>
                        <Link to="booking">
                            <button className="inline-flex items-center justify-center px-9 py-4 border border-transparent rounded-3xl font-semibold bg-[#FEBB1B] text-black hover:border hover:border-[#FEBB1B] hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>

                {/* categories */}
                <div className='laptop:mt-10 tablet:mt-20 z-30 mt-6 grid backdrop-blur-sm px-6 tablet:px-8 laptop:px-12 py-6 rounded-lg bg-transparent tablet:grid-cols-3 grid-cols-2 laptop:gap-8 gap-10 mx-auto'>
                    <span>
                        <img src={Sedan} className='w-[13%]' alt='sedan' />
                        <h2 className='text-xl font-semibold'>
                            Sedans
                        </h2>
                        <p className='text-sm'>
                            TOYOTA COROLLA 2014 - 2016, <br />
                            TOYOTA COROLLA 2017 - 2018
                        </p>
                    </span>
                    <span>
                        <img src={SUVs} className='w-[13%]' alt='SUV' />
                        <h2 className='text-xl font-semibold'>
                            SUVs
                        </h2>
                        <p className='text-sm'>
                            TOYOTA RAV 4 2019, <br />
                            LEXUS GX 460 2015
                        </p>
                    </span>
                    <span className="hidden tablet:block">
                        <img src={Vans} className='w-[13%]' alt='van' />
                        <h2 className='text-xl font-semibold'>
                            Toyota
                        </h2>
                        <p className='text-sm'>
                            TOYOTA HIACE 2018, <br />
                            TOYOTA COASTER
                        </p>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Header