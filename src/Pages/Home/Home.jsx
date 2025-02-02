import { motion } from "framer-motion";
import Header from './Header'
import LuxuryExperience from "./LuxuryExperience";
import FAQs from './FAQs'


// Define animation configuration
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const HomePage = () => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5 }}
        >
            <section className='space-y- bg-[#0C0C0C] text-white'>
                {/* py-10 laptop:px-12 tablet:px-5 px-4 */}
                <div className='border-b border-[#D1D5DB]/20 w-full'>
                    <Header />
                </div>
                <div className='border-b border-[#D1D5DB]/20'>
                    <LuxuryExperience />
                </div>
                <div className=''>
                    <FAQs />
                </div>
            </section>
        </motion.div>
    )
}

export default HomePage