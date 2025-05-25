import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-red-500">Register here !</h2>
        <input
          id="user-name"
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded text-sm sm:text-base"
        />
        
        <input
          id="number"
          type="number"
          placeholder="Mobile Number"
          className="w-full mb-4 p-2 border border-gray-300 rounded text-sm sm:text-base"
        />

        <input
          id="login-id"
          type="text"
          placeholder="User ID"
          className="w-full mb-4 p-2 border border-gray-300 rounded text-sm sm:text-base"
        />

        <input
          id="login-password"
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-gray-300 rounded text-sm sm:text-base"
        />
        <button
          id="login-button"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition text-sm sm:text-base"
        >
          click to register
        </button>
        
        <div className='text-center mt-4'>
        <Link to="/Signin" className='text-blue-500'>Already have an account? Login</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;