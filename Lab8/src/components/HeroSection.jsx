import React from 'react';
import heroImage from '../assets/HeroSectionImg.jpg'; // Thay thế bằng đường dẫn hình ảnh của bạn

function HeroSection() {
    return (
        <div className="relative bg-gray-100 h-[400px]">
            <div className="absolute h-full inset-0">
                <img
                    className="w-full h-full object-cover"
                    src={heroImage}
                    alt="Cô gái đang nấu ăn"
                />
                <div className="absolute inset-0 bg-black opacity-25" aria-hidden="true" />
            </div>
            <div className="relative max-w-7xl h-full mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:py-32">
                {/* Card Recipe of the day */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-md flex flex-col items-center border-[2px] border-dashed border-pink-500">
                    <p className="text-sm font-semibold bg-yellow-500 uppercase tracking-wide rounded-lg px-4 py-2 absolute top-0 -translate-y-1/2">Recipe of the day</p>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-pink-500">Salad Caprese</h2>
                    <p className="mt-2 text-gray-500">Classic Italian Salad Caprese, ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.</p>
                    <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="src/assets/Avatar (1).png" // Placeholder avatar
                                alt="Avatar Salad Caprese"
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Salad Caprese</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            View now <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;