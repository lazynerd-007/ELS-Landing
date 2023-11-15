import Header from './Header'
import BecomeADriver from './BecomeADriver'
import BecomeFleetOwner from './BecomeFleetOwner'
import FAQs from './FAQs'

const Home = () => {
    return (
        <section className=''>
            {/* py-10 laptop:px-10 tablet:px-5 px-4 */}
            <div className='border-b border-[#D1D5DB]/40 pb-10 py-20 h-screen w-full'>
                <Header />
            </div>
            <div className='border-b border-[#D1D5DB]/40 py-10 '>
                <BecomeADriver />
            </div>
            <div className='border-b border-[#D1D5DB]/40 py-10 '>
                <BecomeFleetOwner />
            </div>
            <div className='py-10'>
                <FAQs />
            </div>
        </section>
    )
}

export default Home