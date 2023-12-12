import ImageSlider from "../../Components/Slider/ImageSlider"



const BecomeFleetOwner = () => {
    return (
        <section id="FleetOwner">
            <div className='pt-20 pb-10 space-y-10 px-4 tablet:px-8 laptop:px-12'>
                <h1 className='text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-snug font-black'>
                    Become A Fleet Owner And Grow <br />
                    Your Business
                </h1>

                <div className="tablet:grid hidden laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-10">
                    <img src="https://pbs.twimg.com/media/F7BVWetXYAAs7wK.jpg" className="w-fit mx-auto opacity-60 rounded-xl" alt="TOYOTA COROLLA 2017 - 2018" />
                    <img src="https://www.victorylotus.com/imagetag/102/2/l/Used-2014-Toyota-RAV4-XLE.jpg" className="w-fit mx-auto opacity-60 rounded-xl" alt="RAV4 2014-2016" />
                    <img src="https://senda.us/autocraft/avisnew/images/veh_images/16135224914image_13.jpeg" className="w-fit mx-auto opacity-60 rounded-xl" alt="TOYOTA PRADO 2018" />
                    <img src="https://wehco.media.clients.ellingtoncms.com/timesfreepress/img/photos/2014/02/28/0301_WEB_c_Test_Drive.JPG" className="w-fit mx-auto opacity-60 rounded-xl" alt="LEXUS GX 460 2015" />
                </div>

                <ImageSlider />

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