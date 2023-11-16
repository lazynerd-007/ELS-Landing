import Header from './Header'
import BecomeADriver from './BecomeADriver'
import BecomeFleetOwner from './BecomeFleetOwner'
import FAQs from './FAQs'
import Footer from './Footer'

const HomePageV2 = () => {
    return (
        <section className='space-y- bg-[#17161B] text-white pt-20'>
            {/* py-10 laptop:px-10 tablet:px-5 px-4 */}
            <div className='border-b border-[#D1D5DB]/20 pb-10 py- h-screen w-full'>
                <Header />
            </div>
            <div className='border-b border-[#D1D5DB]/20 pb-10 '>
                <BecomeADriver />
            </div>
            <div className='border-b border-[#D1D5DB]/20 pb-10 '>
                <BecomeFleetOwner />
            </div>
            <div className='pb-10'>
                <FAQs />
            </div>
            <Footer />
        </section>
    )
}

export default HomePageV2