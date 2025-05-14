import React, { useRef, useEffect, useState } from "react";
import Banner from '../images/banner.png';
import { Link } from "react-router-dom";

function Home() {

    // Refs and state for Featured Products carousel
    const carouselRef = useRef(null);
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Refs and state for Electronics carousel
    const electronicsCarouselRef = useRef(null);
    const electronicsPrevBtnRef = useRef(null);
    const electronicsNextBtnRef = useRef(null);
    const [electronicsCurrentIndex, setElectronicsCurrentIndex] = useState(0);

    // Shared logic for both carousels
    const getVisibleItems = () => {
        if (window.innerWidth < 640) return 1; // Mobile: 1 item
        if (window.innerWidth < 768) return 2; // Small tablet: 2 items
        return 4; // Desktop: 4 items
    };

    // Update function for Featured Products carousel
    const updateCarousel = () => {
        if (carouselRef.current) {
            const visibleItems = getVisibleItems();
            const offset = -currentIndex * (100 / visibleItems);
            carouselRef.current.style.transform = `translateX(${offset}%)`;
        }
    };

    // Update function for Electronics carousel
    const updateElectronicsCarousel = () => {
        if (electronicsCarouselRef.current) {
            const visibleItems = getVisibleItems();
            const offset = -electronicsCurrentIndex * (100 / visibleItems);
            electronicsCarouselRef.current.style.transform = `translateX(${offset}%)`;
        }
    };

    // Effect for Featured Products carousel
    useEffect(() => {
        const handleNext = () => {
            if (carouselRef.current) {
                const totalItems = carouselRef.current.children.length;
                const visibleItems = getVisibleItems();
                if (currentIndex < totalItems - visibleItems) {
                    setCurrentIndex(currentIndex + 1);
                }
            }
        };

        const handlePrev = () => {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        };

        const handleResize = () => {
            setCurrentIndex(0); // Reset to first item on resize
            updateCarousel();
        };

        // Add event listeners
        const nextBtn = nextBtnRef.current;
        const prevBtn = prevBtnRef.current;
        if (nextBtn) {
            nextBtn.addEventListener('click', handleNext);
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', handlePrev);
        }
        window.addEventListener('resize', handleResize);

        // Initial update
        updateCarousel();

        // Cleanup event listeners on unmount
        return () => {
            if (nextBtn) {
                nextBtn.removeEventListener('click', handleNext);
            }
            if (prevBtn) {
                prevBtn.removeEventListener('click', handlePrev);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [currentIndex]);

    // Effect for Electronics carousel
    useEffect(() => {
        const handleNext = () => {
            if (electronicsCarouselRef.current) {
                const totalItems = electronicsCarouselRef.current.children.length;
                const visibleItems = getVisibleItems();
                if (electronicsCurrentIndex < totalItems - visibleItems) {
                    setElectronicsCurrentIndex(electronicsCurrentIndex + 1);
                }
            }
        };

        const handlePrev = () => {
            if (electronicsCurrentIndex > 0) {
                setElectronicsCurrentIndex(electronicsCurrentIndex - 1);
            }
        };

        const handleResize = () => {
            setElectronicsCurrentIndex(0); // Reset to first item on resize
            updateElectronicsCarousel();
        };

        // Add event listeners
        const nextBtn = electronicsNextBtnRef.current;
        const prevBtn = electronicsPrevBtnRef.current;
        if (nextBtn) {
            nextBtn.addEventListener('click', handleNext);
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', handlePrev);
        }
        window.addEventListener('resize', handleResize);

        // Initial update
        updateElectronicsCarousel();

        // Cleanup event listeners on unmount
        return () => {
            if (nextBtn) {
                nextBtn.removeEventListener('click', handleNext);
            }
            if (prevBtn) {
                prevBtn.removeEventListener('click', handlePrev);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [electronicsCurrentIndex]);

    // Reusable product card function
    const productCard = (index) => (
        <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
            <div className="bg-white rounded-lg shadow-lg p-3">
                <img
                    src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format"
                    alt={`Product ${index}`}
                    className="w-full h-64 sm:h-64 object-cover rounded-t-lg"
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
    );

    return (
        <>
        {/* search bar */}
            <div className="w-full px-3 py-2 bg-white rounded-lg shadow-lg">
                <div className="">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search any items according to name, category, etc..."
                            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>

        {/* banner */}
            <div className="w-full px-[5%] py-2 flex items-center place-content-center">
                <img src={Banner} alt="banner" className="rounded-xl items-center" />
            </div>

        {/* featured products */}
            <div className="w-full p-4 sm:p-4">

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-2 "><b className="text-red-500">F</b>eatured Products</h2>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-300 ease-in-out" id="carousel" ref={carouselRef}>

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                    <button ref={prevBtnRef} id="prevBtn" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 focus:outline-none">
                        ←
                    </button>
                    <button ref={nextBtnRef} id="nextBtn" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 focus:outline-none">
                        →
                    </button>
                </div>
            </div>
            
        {/* electronics */}
            <div className="w-full p-4 sm:p-4">

                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-2 ">Electronics</h2>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-300 ease-in-out" id="carousel" ref={electronicsCarouselRef}>

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[25%] p-2 sm:p-4">
                                <div className="bg-white rounded-lg shadow-lg p-3">
                                    
                                    <img src="https://imagescdn.jaypore.com/img/app/product/3/39609655-12501928.jpg?w=500&auto=format" alt="Product 1" className="w-full h-100 sm:h-100 object-cover rounded-t-lg" />

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

                    <button ref={electronicsPrevBtnRef} id="prevBtn" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 focus:outline-none">
                        ←
                    </button>
                    <button ref={electronicsNextBtnRef} id="nextBtn" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 focus:outline-none">
                        →
                    </button>
                </div>
            </div>

        {/* show all button */}
            <div className="w-full p-3 px-15 mb-5">
                <div className="rounded-lg bg-gray-200 text-center shadow-xl p-2">
                <Link to="/AllProducts">Show All Products</Link>
                </div>
            </div>
        </>
    );
}

export default Home;