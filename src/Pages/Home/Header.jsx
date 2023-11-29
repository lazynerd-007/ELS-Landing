// import { TypeAnimation } from 'react-type-animation';

import Sedan from "../../assets/sedann.png"
import SUVs from "../../assets/suvv.png"
import Coupe from "../../assets/ccoupe.png"
import Helicopter from "../../assets/helicopterr.png"
import ColorBlocks from "../../assets/color blocks.png"
// import Bentley from "../../assets/hero-bg.png"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            {/* <section className="bg-hero-bg bg-auto bg-custom"> */}
            <section className="relative pt-20 tablet:bg-hero-bg bg-cover max-h-screen bg-center">
                {/* <div className="grid max-w-screen-xl px-4 py-8 bg-hero-bg bg-opacity-10 bg-cover opacity-30 mx-auto laptop:gap-8 xl:gap-0 laptop:py-16 laptop:grid-cols-12"> */}

                {/* Overlay */}
                {/* disabled because it covers the frst part of the header */}
                {/* <div className="absolute inset-0 bg-black opacity-40 z-0"></div> */}

                <div className="grid max-w-screen-xl z-30 laptop:px-12 tablet:px-8 px-4 pt-12 mx-auto laptop:gap-8 laptop:grid-cols-12">
                    <div className="laptop:col-span-7 w-max backdrop-blur-sm">
                        <img src={ColorBlocks} className='mb-4' alt='color-blocks' />
                        <h1
                            className="mb-5 text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-none font-black">
                            Embark on a journey of <br />
                            opulence
                            {/* <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'opulence',
                                    1000,
                                    'prestige',
                                    1000,
                                    'affluence',
                                    1000,
                                    'grandeur',
                                    1000,
                                ]}
                                speed={50}
                                style={{ fontSize: '2.25rem' }}
                                repeat={Infinity}
                            /> */}
                        </h1>
                        <p className="max-w-2xl mb-6 font-light laptop:leading-[2rem] text-white laptop:mb-8 tablet:text-lg laptop:text-[1.225rem]">
                            Every Detail Crafted for the Discerning Connoisseur. <br />
                            Indulge in Timeless Sophistication, Where Luxury is <br />
                            not a Choice, but a Lifestyle.
                        </p>
                        <Link to="v2">
                            <button className="inline-flex items-center justify-center px-9 py-4 border border-transparent rounded-3xl font-semibold bg-[#FEBB1B] text-black hover:border hover:border-[#FEBB1B] hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                                Explore
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='laptop:mt-12 mt-6 laptop:bg-opacity-10 grid laptop:backdrop-blur-sm px-6 tablet:px-8 laptop:px-12 py-6 rounded-lg bg-transparent laptop:grid-cols-4 grid-cols-2 laptop:gap-8 gap-10 justify-between'>
                    <span>
                        <img src={Sedan} className='w-[10%]' alt='sedan' />
                        <h2 className='text-xl font-semibold'>
                            Sedans
                        </h2>
                        <p className='text-base'>
                            Mercedes-Benz S-Class, <br />
                            BMW 7 Series, Audi A8
                        </p>
                    </span>
                    <span>
                        <img src={SUVs} className='w-[10%]' alt='sedan' />
                        <h2 className='text-xl font-semibold'>
                            SUVs
                        </h2>
                        <p className='text-base'>
                            Range Rover,Bentley <br />
                            Bentayga,Rolls-RoyceCullinan
                        </p>
                    </span>
                    <span>
                        <img src={Coupe} className='w-[10%]' alt='sedan' />
                        <h2 className='text-xl font-semibold'>
                            Coupe
                        </h2>
                        <p className='text-base'>
                            Bentley Continental GT <br />
                            Mercedes-Benz S-Class
                        </p>
                    </span>
                    <span>
                        <img src={Helicopter} className='w-[10%]' alt='sedan' />
                        <h2 className='text-xl font-semibold'>
                            Helicopter
                        </h2>
                        <p className='text-base'>
                            Robinson R44 <br />
                            Bell 206 JetRanger
                        </p>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Header