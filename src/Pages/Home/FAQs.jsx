import { Link } from "react-router-dom"

const FAQs = () => {
    return (
        <section id="Help">
            <div className='pt-20 pb-10 space-y-8 px-4 tablet:px-8 laptop:px-12'>
                <div>
                    <h1 className='text-4xl tablet:text-5xl laptop:text-[3.5rem] tracking-tight leading-snug font-black mb-2'>
                        Frequently Asked Questions
                    </h1>
                    <p className='text-[#616161] tablet:text-xl text-base'>
                        If you have any further question please <Link to="/contact" className='link link-hover tablet:text-xl text-base text-[#FEBB1B]'> contact us</Link>
                    </p>
                </div>

                <div className="laptop:grid laptop:grid-cols-2 gap-10 space-y-6 laptop:space-y-0">
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium tablet:text-xl text-base">
                                What sets ELS Luxury black car service apart from regular car services?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-sm text-[#D9D9D9]">
                            ELS Luxury black car service typically offers superior comfort,
                            advanced technology, high-quality materials,
                            and exceptional performance. We often feature cutting-edge
                            safety features and boast a higher level of craftsmanship.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium tablet:text-xl text-base">
                                What are the key features that define ELS luxury black cars?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-sm text-[#D9D9D9]">
                            ELS Luxury black cars include features such as premium leather
                            upholstery, advanced infotainment systems, high-end audio
                            systems, adaptive cruise control, autonomous driving
                            capabilities, and top-notch build quality.
                        </p>
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium tablet:text-xl text-base">
                                Why you should choose ELS Luxury black car service over regular ones?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-sm text-[#D9D9D9]">
                            ELS Luxury black car service offers an unparalleled driving experience,
                            combining advanced technology, superior comfort, and
                            exquisite craftsmanship. They provide a status symbol
                            and often come with cutting-edge features that enhance
                            both performance and aesthetics.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium tablet:text-xl text-base">
                                Does ELS Luxury black car service have better safety features?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-sm text-[#D9D9D9]">
                            Absolutely. ELS Luxury black car service prioritize safety with
                            features such as adaptive cruise control, lane-keeping
                            assistance, automatic emergency braking, and advanced
                            sensor systems. These technologies aim to enhance overall
                            safety for both drivers and passengers.
                        </p>
                    </details>

                </div>
            </div>
        </section>
    )
}

export default FAQs