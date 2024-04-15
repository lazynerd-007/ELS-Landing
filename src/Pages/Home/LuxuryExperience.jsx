import ImageSlider from "../../Components/Slider/ImageSlider"
import Fortuner from "../../assets/fortuner.jpeg"
import Landcruiser from "../../assets/landcruiser.jpeg"
import Prado from "../../assets/prado.jpeg"
import Lexus from "../../assets/lexus.jpeg"



const LuxuryExperience = () => {
    return (
        <section id="FleetOwner">
            <div className='pt-24 pb-10 space-y-10 px-4 tablet:px-8 laptop:px-12'>
                <h1 className='text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-snug font-black'>
                    {/* Become A Fleet Owner And Grow <br />
                    Your Business */}
                    Reservation for an <br />
                    exclusive luxury vehicle experience
                </h1>

                <div className="tablet:grid hidden laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 gap-10">
                    <img src={Fortuner} className="w-full opacity-60 rounded-xl" alt="TOYOTA FORTUNER 2019" />
                    <img src={Landcruiser} className="w-full opacity-60 rounded-xl" alt="TOYOTA LANDCRUISER VX" />
                    <img src={Prado} className="w-full opacity-60 rounded-xl" alt="TOYOTA PRADO 2018" />
                    <img src={Lexus} className="w-full opacity-60 rounded-xl" alt="LEXUS GX 460 2015" />
                </div>

                <ImageSlider />

                <div className="grid laptop:grid-cols-4 gap-10 tablet:grid-cols-2 grid-cols-1">
                    <div className="space-y-2">
                        <h2 className="tablet:text-2xl text-xl font-semibold">
                            Elevate Your Luxury
                        </h2>
                        <p className="text-base text-[#616161]">
                            Your reservation unlocks an exclusive luxury vehicle experience, designed to elevate every moment on the road.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="tablet:text-2xl text-xl font-semibold">
                            Indulge in Luxury
                        </h2>
                        <p className="text-base text-[#616161]">
                            Your reservation isn't just a confirmation; it's an invitation to indulge in the finest luxury.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="tablet:text-2xl text-xl font-semibold">
                            Explore Luxury Travel
                        </h2>
                        <p className="text-base text-[#616161]">
                            As you confirm your reservation, you're opening the door to an exclusive realm of luxury travel.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="tablet:text-2xl text-xl font-semibold">
                            Personalized Services
                        </h2>
                        <p className="text-base text-[#616161]">
                            Your luxury experience goes beyond the road. Enjoy every aspect of your journey tailored to your preferences.
                        </p>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default LuxuryExperience