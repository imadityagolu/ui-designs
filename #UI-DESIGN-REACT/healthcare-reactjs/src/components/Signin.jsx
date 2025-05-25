import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signin() {
  const [id, setId] = useState('admin');
  const [password, setPassword] = useState('12345');
  const defaultID = 'admin';
  const defaultPassword = '12345';
  const navigate = useNavigate();

  const handleLogin = () => {
    if (id === defaultID && password === defaultPassword) {
      navigate('/HealthcareDashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-red-500">Login here !</h2>
        <input
          id="login-id"
          type="text"
          placeholder="User ID"
          className="w-full mb-4 p-2 border border-gray-300 rounded text-sm sm:text-base"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          id="login-password"
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-gray-300 rounded text-sm sm:text-base"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          id="login-button"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition text-sm sm:text-base"
          onClick={handleLogin}
        >
          click to login
        </button>
        <div className='text-center mt-4'>
        <Link to="/Register" className='text-blue-500'>Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;