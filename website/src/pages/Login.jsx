import React from 'react'
import LogoWord from '../assets/logos/KlyftigWord.svg?react';

const Login = () => {
  return (
<div className="bg-klyftig-dark min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <div className="flex justify-center mb-4">
          <LogoWord className="w-40 h-auto" />
        </div>
        <h2 className="text-2xl font-bold text-center text-klyftig-dark mb-6">
          LOG IN
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block color-main font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-klyftig-dark"
              required
            />
          </div>

          <div>
            <label className="block color-main font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-klyftig-dark"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-button-main text-white font-semibold rounded-lg hover:bg-klyftig-dark/90 transition cursor-pointer"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account? <a href="/register" className="text-klyftig-dark underline">Sign Up</a>
        </p>
      </div>
    </div>

  )
}

export default Login