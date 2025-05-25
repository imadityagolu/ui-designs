import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className="bg-blue-900 relative">
                
                <div className="relative bg-blue-300/80">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        
                        <h1 className="text-2xl font-bold text-gray-100">
                            <Link to="/">Healthcare</Link>
                        </h1>

                        <div className="flex items-center space-x-4">
                            
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/90"
                                />
                                <svg
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <CiSearch className="text-2xl" />
                                </svg>
                            </div>

                            <div className="hidden md:flex space-x-2">
                                <Link
                                    to="/signin"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/Register"
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                                >
                                    Signup
                                </Link>
                            </div>

                            <button
                                className="md:hidden text-white focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <svg
                                    className="h-6 w-6 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        ref={menuRef}
                        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-100/90`}
                    >
                        <div className="mx-auto px-4 py-2 flex flex-col space-y-2 fixed bg-blue-100/90 w-[100%] place-content-center text-center">
                            <Link
                                to="/Signin"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/Register"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                            >
                                Signup
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;