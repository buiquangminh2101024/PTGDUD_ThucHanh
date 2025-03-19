import LogoFooter from '../assets/LogoFooter.png'

const Footer = ({ FooterLink }) => {
    const [LearnMore, Shop, Recipes] = FooterLink
    const handleOnSubmit = (event) => {
        event.preventDefault()
    }
    const handleOnClickSendEmail = (event) => {
        event.preventDefault()
    }
    return (
        <footer className="bg-gray-900 text-white rounded-t-md">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex justify-around flex-col-reverse items-start gap-8 md:flex-row md:gap-0">
                    <div className='flex flex-col gap-30'>
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold mb-2">About Us</h2>
                            <p>Welcome to your website, a wonderful place to explore and learn how to cook like a pro.</p>
                            <form className="flex gap-4" action="" onSubmit={event => handleOnSubmit(event)}>
                                <input type="text" placeholder="Enter your email" className="h-10 min-w-100 bg-white outline-0 text-black font-medium rounded-md px-3 placeholder:text-gray-300"/>
                                <button className="bg-pink-500 h-10 rounded-md px-3 hover:cursor-pointer" onClick={event => handleOnClickSendEmail(event)}>Send</button>
                            </form>
                        </div>
                        <div className='flex items-center gap-4 text-[0.85em]'>
                            <img src={LogoFooter} alt="" />
                            <span>2023 Chefify Company</span>
                            <span><a href="#" className='hover:underline'>Term of Service</a> | <a href="#" className='hover:underline'>Privacy Policy</a></span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-8 md:gap-14">
                        <div className='grid grid-cols-1 gap-4'>
                            <h2 className="font-bold">{LearnMore.id}</h2>
                            <ul className="grid grid-cols-1 gap-4">
                                {
                                    LearnMore.content.map(i =>
                                        <li key={i}>
                                            <a href="" className="hover:underline">{i}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <h2 className="font-bold">{Shop.id}</h2>
                            <ul className="grid grid-cols-1 gap-4">
                                {
                                    Shop.content.map(i =>
                                        <li key={i}>
                                            <a href="" className="hover:underline">{i}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <h2 className="font-bold">{Recipes.id}</h2>
                        <ul className="grid grid-cols-1 gap-4">
                            {
                                Recipes.content.map(i =>
                                    <li key={i}>
                                        <a href="" className="hover:underline">{i}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer