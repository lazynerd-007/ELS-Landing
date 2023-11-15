import React from 'react'
import Sedan from "../assets/sedann.png"
import SUVs from "../assets/suvv.png"
import Coupe from "../assets/ccoupe.png"
import Helicopter from "../assets/helicopterr.png"
import ColorBlocks from "../assets/color blocks.png"

const Header = () => {
    return (
        <div>
            <section className="">
                {/* <div className="grid max-w-screen-xl px-4 py-8 bg-hero-bg bg-opacity-10 bg-cover opacity-30 mx-auto laptop:gap-8 xl:gap-0 laptop:py-16 laptop:grid-cols-12"> */}
                <div className="grid max-w-screen-xl laptop:px-12 px-4 py-8 mx-auto laptop:gap-8 xl:gap-0 laptop:grid-cols-12">
                    <div className="laptop:col-span-7">
                        <img src={ColorBlocks} className='mb-4' alt='color-blocks' />
                        <h1
                            className="max-w-2 mb-5 text-4xl tracking-tight leading-none tablet:text-5xl laptop:text-[3.5rem] font-black">
                            Embark on a journey of opulence
                        </h1>
                        <p className="max-w-2xl mb-6 font-light laptop:leading-[2rem] text-white laptop:mb-8 tablet:text-lg laptop:text-[1.225rem]">
                            Every Detail Crafted for the Discerning Connoisseur.
                            Indulge in Timeless Sophistication, Where Luxury is <br />
                            not a Choice, but a Lifestyle.
                        </p>
                        <button className="inline-flex items-center justify-center px-9 py-4 border border-transparent rounded-3xl font-semibold bg-[#FEBB1B] text-black hover:border hover:border-[#FEBB1B] hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                            Explore
                        </button>
                    </div>
                    <div className="hidden laptop:mt-0 laptop:col-span-5 laptop:flex">
                        <img
                            src="https://hips.hearstapps.com/hmg-prod/images/flying-spur-top-shot-1621351726.jpg?crop=0.502xw:1.00xh;0,0&resize=1200:*"
                            className='opacity-50 w-[70%]'
                            alt="mockup" />
                    </div>
                </div>

                <div className='mt-6 laptop:bg-opacity-40 laptop:backdrop-blur-md backdrop-blur-sm px-6 laptop:px-12 py-3 rounded-lg bg-transparent grid laptop:grid-cols-4 grid-cols-2 laptop:gap-8 gap-12 justify-between'>
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