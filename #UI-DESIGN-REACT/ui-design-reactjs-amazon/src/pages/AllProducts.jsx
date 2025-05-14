import React from "react";

function AllProducts() {
    return (
        <>
            <div className="w-full px-5 py-3 bg-white rounded-lg shadow-lg">
                <div className="flex flex-wrap gap-4 mb-3">
                    <div className="flex-1 min-w-[150px]">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <select id="category" className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">All</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="books">Books</option>
                            <option value="shoes">Shoes</option>
                        </select>
                    </div>
                    <div className="flex-1 min-w-[150px]">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price Range</label>
                        <select id="price" className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">All</option>
                            <option value="0-50">$0 - $50</option>
                            <option value="51-100">$51 - $100</option>
                            <option value="101+">$101+</option>
                        </select>
                    </div>
                    <div className="flex-1 min-w-[150px]">
                        <label htmlFor="sort" className="block text-sm font-medium text-gray-700">Sort By</label>
                        <select id="sort" className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="relevance">Relevance</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="w-full p-4 sm:p-4">

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-2">
                    <b className="text-red-500">A</b>ll Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                    <div className="p-2 sm:p-4">
                        <div className="bg-white rounded-lg shadow-lg p-3">
                            <img
                                src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format"
                                alt="Product 1"
                                className="w-full h-70 sm:h-70 object-cover rounded-t-lg"
                            />
                            <div className="p-2 sm:p-3">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800">NAME</h3>
                                <p className="text-xs text-gray-600 mt-1">Description</p>
                                <p className="text-sm sm:text-base font-bold text-blue-600 mt-2">₹</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="flex-1 bg-blue-600 text-white py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-1 text-xs sm:text-sm rounded-lg hover:bg-gray-300 focus:outline-none">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 sm:p-4">
                        <div className="bg-white rounded-lg shadow-lg p-3">
                            <img
                                src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format"
                                alt="Product 2"
                                className="w-full h-70 sm:h-70 object-cover rounded-t-lg"
                            />
                            <div className="p-2 sm:p-3">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800">NAME</h3>
                                <p className="text-xs text-gray-600 mt-1">Description</p>
                                <p className="text-sm sm:text-base font-bold text-blue-600 mt-2">₹</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="flex-1 bg-blue-600 text-white py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-1 text-xs sm:text-sm rounded-lg hover:bg-gray-300 focus:outline-none">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 sm:p-4">
                        <div className="bg-white rounded-lg shadow-lg p-3">
                            <img
                                src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format"
                                alt="Product 3"
                                className="w-full h-70 sm:h-70 object-cover rounded-t-lg"
                            />
                            <div className="p-2 sm:p-3">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800">NAME</h3>
                                <p className="text-xs text-gray-600 mt-1">Description</p>
                                <p className="text-sm sm:text-base font-bold text-blue-600 mt-2">₹</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="flex-1 bg-blue-600 text-white py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-1 text-xs sm:text-sm rounded-lg hover:bg-gray-300 focus:outline-none">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 sm:p-4">
                        <div className="bg-white rounded-lg shadow-lg p-3">
                            <img
                                src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format"
                                alt="Product 4"
                                className="w-full h-70 sm:h-70 object-cover rounded-t-lg"
                            />
                            <div className="p-2 sm:p-3">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800">NAME</h3>
                                <p className="text-xs text-gray-600 mt-1">Description</p>
                                <p className="text-sm sm:text-base font-bold text-blue-600 mt-2">₹</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="flex-1 bg-blue-600 text-white py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-1 text-xs sm:text-sm rounded-lg hover:bg-gray-300 focus:outline-none">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 sm:p-4">
                        <div className="bg-white rounded-lg shadow-lg p-3">
                            <img
                                src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format"
                                alt="Product 5"
                                className="w-full h-70 sm:h-70 object-cover rounded-t-lg"
                            />
                            <div className="p-2 sm:p-3">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800">NAME</h3>
                                <p className="text-xs text-gray-600 mt-1">Description</p>
                                <p className="text-sm sm:text-base font-bold text-blue-600 mt-2">₹</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="flex-1 bg-blue-600 text-white py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-1 text-xs sm:text-sm rounded-lg hover:bg-gray-300 focus:outline-none">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 sm:p-4">
                        <div className="bg-white rounded-lg shadow-lg p-3">
                            <img
                                src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format"
                                alt="Product 6"
                                className="w-full h-70 sm:h-70 object-cover rounded-t-lg"
                            />
                            <div className="p-2 sm:p-3">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800">NAME</h3>
                                <p className="text-xs text-gray-600 mt-1">Description</p>
                                <p className="text-sm sm:text-base font-bold text-blue-600 mt-2">₹</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="flex-1 bg-blue-600 text-white py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-1 text-xs sm:text-sm rounded-lg hover:bg-gray-300 focus:outline-none">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2 sm:p-4">
                        <div className="bg-white rounded-lg shadow-lg p-3">
                            <img
                                src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format"
                                alt="Product 6"
                                className="w-full h-70 sm:h-70 object-cover rounded-t-lg"
                            />
                            <div className="p-2 sm:p-3">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800">NAME</h3>
                                <p className="text-xs text-gray-600 mt-1">Description</p>
                                <p className="text-sm sm:text-base font-bold text-blue-600 mt-2">₹</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="flex-1 bg-blue-600 text-white py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-1 text-xs sm:text-sm rounded-lg hover:bg-gray-300 focus:outline-none">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-2 sm:p-4">
                        <div className="bg-white rounded-lg shadow-lg p-3">
                            <img
                                src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format"
                                alt="Product 6"
                                className="w-full h-70 sm:h-70 object-cover rounded-t-lg"
                            />
                            <div className="p-2 sm:p-3">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800">NAME</h3>
                                <p className="text-xs text-gray-600 mt-1">Description</p>
                                <p className="text-sm sm:text-base font-bold text-blue-600 mt-2">₹</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="flex-1 bg-blue-600 text-white py-1 text-xs sm:text-sm rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 bg-gray-200 text-gray-800 py-1 text-xs sm:text-sm rounded-lg hover:bg-gray-300 focus:outline-none">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AllProducts;