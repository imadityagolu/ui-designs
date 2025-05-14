import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSitemap, FaShoppingCart, FaBoxOpen, FaBars } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-900 text-white flex h-16 px-4 sm:px-10 justify-between items-center  sticky top-0 z-40">
            {/* Logo */}
            <p className="font-bold text-2xl sm:text-3xl">
                <Link to="/">amazon.in</Link>
            </p>

            {/* Hamburger Icon for Small Screens */}
            <button
                className="md:hidden text-2xl focus:outline-none cursor-pointer"
                onClick={toggleSidebar}
                aria-label="Toggle menu"
            >
                <FaBars />
            </button>

            {/* Navigation List for Larger Screens */}
            <ul className="hidden md:flex items-center gap-6">
                <li className="flex items-center gap-1">
                    <FaSitemap />
                    <Link to="/AllProducts">All Products</Link>
                </li>
                <li className="flex items-center gap-1">
                    <FaShoppingCart />
                    <Link to="/Cart">Cart</Link>
                </li>
                <li className="flex items-center gap-1">
                    <FaBoxOpen />
                    <Link to="/Order">Order</Link>
                </li>
                <li className="flex items-center gap-1">
                    <IoPersonCircle className="text-xl" />
                    <Link to="/Login">Login</Link>
                </li>
            </ul>

            {/* Sidebar for Small Screens */}
            <div
                className={`fixed top-0 right-0 h-full w-[40%] bg-gray-900 text-white flex flex-col pt-12 transition-transform duration-400 ease-in-out transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden z-50`}
            >
                <ul className="flex flex-col items-start gap-7 px-8">
                    <li className="flex items-center gap-2">
                        <FaSitemap className="text-3xl" />
                        <Link to="/AllProducts" onClick={toggleSidebar} className="text-xl">
                            All Products
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaShoppingCart className="text-3xl"  />
                        <Link to="/Cart" onClick={toggleSidebar} className="text-xl">
                            Cart
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaBoxOpen className="text-3xl"  />
                        <Link to="/Order" onClick={toggleSidebar} className="text-xl">
                            Order
                        </Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <IoPersonCircle className="text-3xl" />
                        <Link to="/Login" onClick={toggleSidebar} className="text-xl">
                            Login
                        </Link>
                    </li>
                </ul>

            </div>

            {/* Overlay for Small Screens */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50 md:hidden z-40"
                    onClick={toggleSidebar}
                    aria-hidden="true"
                ></div>
            )}
        </div>
    );
}

export default Navbar;