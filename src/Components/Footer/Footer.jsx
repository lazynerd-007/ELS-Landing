

// date for copyright
const theDate = new Date().getFullYear();
// end of date

const Footer = () => {
    return (
        <div>
            <div className="bg-[#1b1b1b] h-4"></div>
            <footer className="bg-[#0C0C0C] text-[#E5E7EB] py-10 laptop:px-12 tablet:px-8 px-4 bottom-0">
                <div className="w-full laptop:flex space-y-2 laptop:space-y-0 justify-between py-2 border-y border-white/20">
                    <div className="flex laptop:gap-8 gap-2 justify-center">
                        <p>
                            Follow Us
                        </p>
                        <p>
                            Facebook
                        </p>
                        <p>
                            Twitter
                        </p>
                        <p>
                            Instagram
                        </p>
                    </div>
                    <div className="flex justify-center text-center">
                        <p className="text-sm">
                            © Copyright <span className="text-sm">{theDate}</span> by ELS. Design by <a className="text-[#FDB913] link link-hover text-sm">Temsdesgn</a> with love
                            {/* All rights reserved */}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer