import Driver from "../../assets/driver-o.png"
import GooglePlay from "../../assets/google-play-badge-logo-svgrepo.png"
import AppStore from "../../assets/download-on-the-app-store-svgrepo.png"


const BecomeADriver = () => {
    return (
        <section id="Driver">
            <div className='pt-20 pb-10 px-4 tablet:px-8 laptop:px-12'>
                <h1 className='text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-snug font-black mb-6'>
                    Become A Driver And Chauffeur
                </h1>

                <div className='laptop:flex justify-between gap-10 items-center space-y-'>
                    <div className="flex-1">
                        <img src={Driver} className='w-full' alt='driver' />
                    </div>

                    <div className="flex-1 space-y-10 items-center mt-10 laptop:mt-0">
                        <div className="space-y-">
                            <h2 className="tablet:text-3xl text-xl font-semibold">
                                Download on our app
                            </h2>
                            <span className="flex gap-4">
                                <img src={GooglePlay} className="" alt="Google Play badge" />
                                <img src={AppStore} className="" alt="" />
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BecomeADriver