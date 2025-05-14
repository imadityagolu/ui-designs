import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>

            {/* Registration Form */}
            <main className="min-h-screen bg-gray-200 flex items-center justify-center px-4 sm:px-6">

                <section className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-md">

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                        <IoPersonCircle className="inline-block text-4xl mr-2" />
                        Register
                    </h1>
                    
                    <form className="space-y-6">
                        <label className="block">
                            <span className="text-gray-700 text-sm font-medium">Name</span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700 text-sm font-medium">Email</span>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </label>
                        <label className="block relative">
                            <span className="text-gray-700 text-sm font-medium">Password</span>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="mt-1 w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                            </button>
                        </label>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Register Now !
                        </button>
                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-600 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Register;