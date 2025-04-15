import { useState } from 'react';
import logo from '../assets/Logo.png'; // Thay thế bằng đường dẫn logo của bạn

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl ml-2 text-pink-500">Chefify</span> {/* Thay thế bằng tên logo của bạn */}
          </div>
  
          {/* Tìm kiếm */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-6a7 7 0 10-14 0 7 7 0 0014 0z" />
            </svg>
            <input
              type="text"
              placeholder="What would you like to cook?"
              className="bg-transparent outline-none text-gray-700 placeholder-gray-400 w-48"
            />
          </div>
  
          {/* Các mục menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">What to cook</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Recipes</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Ingredients</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Occasions</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
          </div>
  
          {/* Các nút Login và Subscribe */}
          <div className="hidden md:flex space-x-2">
            <button className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full hover:text-pink-700 focus:outline-none">Login</button>
            <button className="bg-pink-500 text-white rounded-full px-4 py-2 hover:bg-pink-700 focus:outline-none">Subscribe</button>
          </div>
  
          {/* Nút cho mobile menu */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500" onClick={event => setShowMenu(!showMenu)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
  
        {/* Mobile Menu (ẩn mặc định, sẽ được hiển thị bằng JavaScript) */}
        <div className={`md:hidden ${showMenu? "" : "hidden"}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="bg-gray-100 text-gray-900 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">What to cook</a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Recipes</a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Ingredients</a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Occasions</a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
          </div>
          <div className="px-4 py-2">
            <button className="block w-full bg-pink-100 text-pink-500 rounded-full px-4 py-2 hover:text-pink-700 focus:outline-none text-center">Login</button>
            <button className="block w-full bg-pink-500 text-white rounded-full px-4 py-2 hover:bg-pink-700 focus:outline-none mt-2 text-center">Subscribe</button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;