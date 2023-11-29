import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Define animation configuration
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Contact = () => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5 }}
        >
            <section className="bg-[#0C0C0C] text-white ">
                <div className="pt- min-h-screen laptop:px-12 tablet:px-8 px-4">
                    <div className="flex flex-col min-h-screen">
                        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                            <div className="flex-1 laptop:flex laptop:items-center laptop:-mx-6">
                                <div className="text-white space-y-10 laptop:w-1/2 laptop:mx-6 hidden laptop:block">
                                    <div className="space-y-3">
                                        <h1 className="text-2xl font-semibold capitalize laptop:text-3xl">
                                            ELS
                                        </h1>

                                        <p className="max-w-xl italic">
                                            ...where Luxury is not a Choice, but a Lifestyle...
                                            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
                                        </p>

                                        <Link to="/" className="inline-block">
                                            <button type="btn"
                                                className="py-3 px-5 border capitalize border-transparent rounded-lg font-medium bg-[#FEBB1B] sm:w-fit text-black hover:border hover:border-[#FEBB1B] focus:outline-none hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                                                Home
                                            </button>
                                        </Link>
                                    </div>

                                </div>

                                <div className="laptop:w-1/2 laptop:mx-6">
                                    <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-[#3138341a]  shadow-2xl rounded-xl  laptop:max-w-xl">
                                        <h1 className="text-2xl text-center font-medium dark:text-gray-200">
                                            Contact Us
                                        </h1>

                                        <p className="mt-2 text-center text-gray-400">
                                            Ask us anything, we would love to hear from you!
                                        </p>

                                        <form className="mt-6">
                                            <div className="flex-1">
                                                <label className="block mb-2 text-sm text-gray-200">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:ring-opacity-40  focus:outline-none focus:ring"
                                                />
                                            </div>

                                            <div className="flex-1 mt-6">
                                                <label className="block mb-2 text-sm text-gray-200">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="johndoe@example.com"
                                                    className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:ring-opacity-40  focus:outline-none focus:ring"
                                                />
                                            </div>

                                            <div className="w-full mt-6">
                                                <label className="block mb-2 text-sm text-gray-200">
                                                    Message
                                                </label>
                                                <textarea
                                                    rows="4"
                                                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48  focus:ring-opacity-40  focus:outline-none focus:ring"
                                                    placeholder="Message..."
                                                ></textarea>
                                            </div>

                                            <button type="submit"
                                                className="py-3 px-5 mt-6 border border-transparent rounded-lg font-medium bg-[#FEBB1B] sm:w-fit text-black hover:border hover:border-[#FEBB1B] focus:outline-none hover:text-white hover:bg-transparent focus:ring-1 focus:ring-[#FEBB1B] ">
                                                Send message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </motion.div>
    )
}

export default Contact