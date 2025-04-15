const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-2">About Us</h3>
                    <p className="mb-4">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className="flex gap-4">
                        <input type="email" placeholder="Enter your email" className="p-2 bg-white rounded-md w-full text-black" />
                        <button className="bg-pink-500 px-4 py-2 rounded-md">Send</button>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Learn More</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-pink-400">Our Cooks</a></li>
                        <li><a href="#" className="hover:text-pink-400">See Our Features</a></li>
                        <li><a href="#" className="hover:text-pink-400">FAQ</a></li>
                    </ul>
                    <h4 className="font-bold mt-6 mb-2">Shop</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-pink-400">Gift Subscription</a></li>
                        <li><a href="#" className="hover:text-pink-400">Send Us Feedback</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Recipes</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-pink-400">What to Cook This Week</a></li>
                        <li><a href="#" className="hover:text-pink-400">Pasta</a></li>
                        <li><a href="#" className="hover:text-pink-400">Dinner</a></li>
                        <li><a href="#" className="hover:text-pink-400">Healthy</a></li>
                        <li><a href="#" className="hover:text-pink-400">Vegetarian</a></li>
                        <li><a href="#" className="hover:text-pink-400">Vegan</a></li>
                        <li><a href="#" className="hover:text-pink-400">Christmas</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-400">
                <div className="flex justify-center items-center gap-2 mb-2">
                    <div className="text-2xl font-bold text-white">🍳 Cheffy</div>
                </div>
                <p>
                    © 2023 Cheffy Company &nbsp; | &nbsp;
                    <a href="#" className="hover:text-pink-400">Terms of Service</a> | <a href="#" className="hover:text-pink-400">Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer