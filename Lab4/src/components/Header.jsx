import { useState } from "react"
import Logo from '../assets/Logo.png'
import Search from '../assets/search.png'
import Purchase from '../assets/purchase.png'
import Avatar from '../assets/avatar.jpg'


const Header = ({NavLink}) => {
    const [isOpen, setOpen] = useState(false)
    const [isMouseRecipeBoxDown, setMouseRBDown] = useState(false)
    const handleOnClickAvatar = (event) => {
        event.preventDefault()
        setOpen(!isOpen)
    }
    const handleOnClickSearch = (event) => {
    }
    const handleOnClickRecipeBox = (event) => {
    }
    const handleOnSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex justify-between items-center gap-3">
                        <a href="#">
                            <img src={Logo} alt="" />
                        </a>
                        <form className="flex flex-wrap rounded-md bg-gray-200 h-10" onSubmit={event => handleOnSubmit(event)} action="">
                            <button className="min-w-10 w-10 h-10 flex justify-center items-center hover: cursor-pointer" onClick={event => handleOnClickSearch(event)}>
                                <img src={Search} alt="" className="w-4 h-4" />
                            </button>
                            <input type="text" placeholder="what would you like to cook?" className="placeholder-gray-400 font-medium w-[250px]" />
                        </form>
                    </div>
                    <div className="flex gap-4 text-gray-600 font-medium">
                        {
                            NavLink.map((i) => <a href="#" key={i}>{i}</a>)
                        }
                    </div>
                    <div className='flex gap-4'>
                        <button className={`rounded-md font-medium h-10 flex items-center pe-2 auto hover: cursor-pointer ${isMouseRecipeBoxDown? 'bg-pink-400 text-pink-600' : 'bg-pink-200 text-pink-500'}`} 
                        onClick={event => handleOnClickRecipeBox(event)} 
                        onMouseDown={event => setMouseRBDown(!isMouseRecipeBoxDown)}
                        onMouseUp={event => setMouseRBDown(!isMouseRecipeBoxDown)}>
                            <div className="min-w-10 flex justify-center items-center">
                                <img src={Purchase} alt="" className="block w-4 h-4" />
                            </div>
                            <span>Your Recipe Box</span>
                        </button>
                        <div className="relative">
                            <div className="w-10 h-10 bg-amber-500 rounded-4xl overflow-hidden">
                                <a href="" className="w-full h-full hover: cursor-pointer" onClick={event => handleOnClickAvatar(event)}>
                                    <img src={Avatar} alt="" />
                                </a>
                            </div>
                            <div className={`absolute right-0 z-10 mt-2 origin-top-right duration-500 overflow-y-scroll scrollbar-hidden rounded-md bg-white shadow-lg ${isOpen ? 'w-56 h-19' : 'w-0 h-0'
                                }`}>
                                <div className="p-2 flex flex-col gap-1 justify-around h-full">
                                    <a href="#" className="flex items-center min-h-8 hover:bg-gray-200">Xem thông tin</a>
                                    <hr />
                                    <a href="#" className="flex items-center min-h-8 hover:bg-gray-200">Thoát</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header