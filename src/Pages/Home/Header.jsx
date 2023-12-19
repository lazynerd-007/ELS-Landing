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
                <div className='laptop:mt-10 tablet:mt-20 z-30 mt-6 grid backdrop-blur-sm px-6 tablet:px-8 laptop:px-12 py-6 rounded-lg bg-transparent laptop:grid-cols-6 grid-cols-3 laptop:gap-8 gap-10 mx-auto'>
                    <span className="space-y-4">
                        <img src="https://cars.ng/images/cars-ng/hotel_toyota_land_cruiser_prado_2018_804484_1.png"
                            className='w-1/4 rounded-full'
                            alt='sedan' />
                        <p className='text-sm'>
                            TOYOTA PRADO 2014
                        </p>
                    </span>
                    <span className="space-y-6">
                        <img src="https://www.carsized.com/resources/toyota/land-cruiser-prado/d/2018/sl_309135158_toyota-land-cruiser-prado-2018-side-view_4x.png"
                            className='w-1/4 rounded-full'
                            alt='sedan' />
                        <p className='text-sm'>
                            TOYOTA PRADO 2018
                        </p>
                    </span>
                    <span className="space-y-3">
                        <img src="https://www.cars.com/i/large/in/v2/stock_photos/255290c1-edd2-4dfd-9bf3-cf23ad031cc6/d6f85ce4-8c6e-45d7-9c9c-ec33c1033f82.png"
                            className='w-1/4 rounded-full'
                            alt='sedan' />
                        <p className='text-sm'>
                            TOYOTA LANDCRUISER 2018
                        </p>
                    </span>
                    <span className="space-y-4">
                        <img src="https://www.motortrend.com/uploads/sites/10/2015/11/2015-lexus-gx-460-suv-angular-front.png?fit=around%7C875:492"
                            className='w-1/4 rounded-full'
                            alt='sedan' />
                        <p className='text-sm'>
                            LEXUS GX 460 2015
                        </p>
                    </span>
                    <span className="space-y-6">
                        <img src="https://www.toyota.co.nz/globalassets/car-images/land-cruiser-gjxt-si2-4v8-22.png"
                            className='w-1/4 rounded-full'
                            alt='sedan' />
                        <p className='text-sm'>
                            TOYOTA PRADO VX 2018
                        </p>
                    </span>
                    <span className="space-y-3">
                        <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Toyota-Fortuner_1.png"
                            className='w-1/4 rounded-full'
                            alt='sedan' />
                        <p className='text-sm'>
                            TOYOTA FORTUNER 2019
                        </p>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Header