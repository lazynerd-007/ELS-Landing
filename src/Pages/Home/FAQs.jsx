import { Link } from "react-router-dom"

const FAQs = () => {
    return (
        <section id="Help">
            <div className='pt-20 space-y-8 px-4 tablet:px-8 laptop:px-12'>
                <div>
                    <h1 className='text-[3rem] font-black leading-[3.6rem]'>
                        Frequently Asked Questions
                    </h1>
                    <p className='text-[#616161] text-xl'>
                        If you have any further question please <Link to="/contact" className='link link-hover text-xl text-[#FEBB1B]'> contact us</Link>
                    </p>
                </div>

                <div className="laptop:grid laptop:grid-cols-2 gap-10 space-y-6 laptop:space-y-0">
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium">
                                Does ELS provide food in the vehicle ?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-[#D9D9D9]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam bibendum metus, sit amet fermentum purus sollicitudin vel. Pellentesque vitae lacinia justo. Cras nec arcu nec leo dignissim tincidunt. Sed in tellus non libero varius pharetra. Fusce et nisl vitae est suscipit vulputate eu at mi. Morbi eget massa ac justo condimentum feugiat. Proin vel nunc eu elit varius gravida.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium">
                                Does ELS provide food in the vehicle ?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-[#D9D9D9]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam bibendum metus, sit amet fermentum purus sollicitudin vel. Pellentesque vitae lacinia justo. Cras nec arcu nec leo dignissim tincidunt. Sed in tellus non libero varius pharetra. Fusce et nisl vitae est suscipit vulputate eu at mi. Morbi eget massa ac justo condimentum feugiat. Proin vel nunc eu elit varius gravida.
                        </p>
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium">
                                Does ELS provide food in the vehicle ?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-[#D9D9D9]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam bibendum metus, sit amet fermentum purus sollicitudin vel. Pellentesque vitae lacinia justo. Cras nec arcu nec leo dignissim tincidunt. Sed in tellus non libero varius pharetra. Fusce et nisl vitae est suscipit vulputate eu at mi. Morbi eget massa ac justo condimentum feugiat. Proin vel nunc eu elit varius gravida.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium">
                                Does ELS provide food in the vehicle ?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-[#D9D9D9]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam bibendum metus, sit amet fermentum purus sollicitudin vel. Pellentesque vitae lacinia justo. Cras nec arcu nec leo dignissim tincidunt. Sed in tellus non libero varius pharetra. Fusce et nisl vitae est suscipit vulputate eu at mi. Morbi eget massa ac justo condimentum feugiat. Proin vel nunc eu elit varius gravida.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium">
                                Does ELS provide food in the vehicle ?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-[#D9D9D9]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam bibendum metus, sit amet fermentum purus sollicitudin vel. Pellentesque vitae lacinia justo. Cras nec arcu nec leo dignissim tincidunt. Sed in tellus non libero varius pharetra. Fusce et nisl vitae est suscipit vulputate eu at mi. Morbi eget massa ac justo condimentum feugiat. Proin vel nunc eu elit varius gravida.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-2 text-white"
                        >
                            <h2 className="font-medium">
                                Does ELS provide food in the vehicle ?
                            </h2>
                        </summary>

                        <p className="mt-4 px-2 leading-relaxed text-[#D9D9D9]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam bibendum metus, sit amet fermentum purus sollicitudin vel. Pellentesque vitae lacinia justo. Cras nec arcu nec leo dignissim tincidunt. Sed in tellus non libero varius pharetra. Fusce et nisl vitae est suscipit vulputate eu at mi. Morbi eget massa ac justo condimentum feugiat. Proin vel nunc eu elit varius gravida.
                        </p>
                    </details>

                </div>
            </div>
        </section>
    )
}

export default FAQs