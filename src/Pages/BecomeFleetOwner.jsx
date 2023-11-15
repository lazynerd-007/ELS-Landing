import Fleet from "../assets/fleet-o.png"

const BecomeFleetOwner = () => {
    return (
        <section id="FleetOwner">
            <div className='pt- space-y-8 laptop:pt- px-4 tablet:px-8 laptop:px-12'>
                <div className='flex justify-between gap-4'>
                    <h1 className='text-[3rem] font-black leading-[3.6rem]'>
                        Become A Fleet Owner And Grow <br />
                        Your Business
                    </h1>
                    <button className="inline-flex text-base items-center justify-center px-5 py-2 h-max border border-transparent rounded-3xl font-semibold bg-[#FEBB1B] text-black hover:border hover:border-[#FEBB1B] hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                        Get Started
                    </button>
                </div>

                <img src={Fleet} className="w-full" alt="fleet" />

                <div className="grid laptop:grid-cols-3 gap-8 tablet:grid-cols-2 grid-cols-1">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold">
                            Boost your earnings
                        </h2>
                        <p className="text-base text-[#616161]">
                            Our large rider community means more orders per day and higher earnings.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold">
                            Manage your assets
                        </h2>
                        <p className="text-base text-[#616161]">
                            Easily view your vehicles, drivers and their current status.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold">
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