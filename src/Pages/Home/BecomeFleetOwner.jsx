import Car1 from "../../assets/Car1.png"
import Car2 from "../../assets/Car2.png"
import Car3 from "../../assets/Car3.png"
import Bus from "../../assets/Bus1.png"


const BecomeFleetOwner = () => {
    return (
        <section id="FleetOwner">
            <div className='pt-20 pb-10 space-y-10 px-4 tablet:px-8 laptop:px-12'>
                <div className='laptop:flex justify-between gap-4'>
                    <h1 className='text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-snug font-black'>
                        Become A Fleet Owner And Grow <br />
                        Your Business
                    </h1>
                    <button className="inline-flex mt-4 laptop:mt-0 text-base items-center justify-center px-5 py-2 h-max border border-transparent rounded-3xl font-semibold bg-[#FEBB1B] text-black hover:border hover:border-[#FEBB1B] hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                        Get Started
                    </button>
                </div>

                <div className="grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-10">
                    <img src="https://cdn.carbuzz.com/gallery-images/1600/354000/100/354172.jpg" className="w-fit mx-auto opacity-60 rounded-xl" alt="car-3" />
                    <img src="https://editorials.autotrader.ca/media/7265/2015-toyota-sienna-se-mb-01.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=131220183429700000" className="w-fit mx-auto opacity-60 rounded-xl" alt="TOYOTA SIENNA 2015" />
                    <img src="https://www.motortrend.com/uploads/sites/5/2019/10/2019-Toyota-RAV4-XLE-front-three-quarter-in-motion-1.jpg" className="w-fit mx-auto opacity-60 rounded-xl" alt="toyota rav 4 2019" />
                    <img src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/jpg/201412/2015-2014-lexus-gx-460---.jpg" className="w-fit mx-auto opacity-60 rounded-xl" alt="LEXUS GX 460 2015" />
                </div>

                <div className="grid laptop:grid-cols-3 gap-8 tablet:grid-cols-2 grid-cols-1">
                    <div className="space-y-2">
                        <h2 className="tablet:text-3xl text-xl font-semibold">
                            Boost your earnings
                        </h2>
                        <p className="text-base text-[#616161]">
                            Our large rider community means more orders per day and higher earnings.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="tablet:text-3xl text-xl font-semibold">
                            Manage your assets
                        </h2>
                        <p className="text-base text-[#616161]">
                            Easily view your vehicles, drivers and their current status.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="tablet:text-3xl text-xl font-semibold">
                            Keep track of performance
                        </h2>
                        <p className="text-base text-[#616161]">
                            Get easy access to each driver’s completed trips, invoices, and payout information.
                        </p>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default BecomeFleetOwner