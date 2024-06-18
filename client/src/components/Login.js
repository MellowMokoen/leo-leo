// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from "../images";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   
    navigate('/chat');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center mb-4">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          
        </div>
        <h1 className="text-2xl mb-3 font-bold" style={{ color: '#100547' }}>Login to your account</h1>
        <p className="text-sm text-gray-600 mb-4">
          Don't have an account yet? <a href="/signup" className="text-blue-500">Sign up</a>
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <p className="text-xs text-blue-500 text-right">
              <a href="/forgot-password">Forgot password?</a>
            </p>
          </div>
          <button
            type="submit"
            className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            style={{ backgroundColor: '#100547' }}
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 mb-2 text-center">Or login with</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-200 hover:bg-red-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <i class="fa-brands fa-google mx-2"></i>Google
          </button>
          <button className="bg-gray-200 hover:bg-blue-800 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <i class="fa-brands fa-facebook mx-2"></i>Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
