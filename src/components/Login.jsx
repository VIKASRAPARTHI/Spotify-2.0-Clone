import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation
    if (formData.email && formData.password) {
      onLogin({
        email: formData.email,
        displayName: formData.displayName || formData.email.split('@')[0]
      })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#1db954] via-[#1ed760] to-[#191414] flex items-center justify-center p-4'>
      <div className='bg-black rounded-lg p-8 w-full max-w-md'>
        <div className='text-center mb-8'>
          <img className='w-12 h-12 mx-auto mb-4' src={assets.spotify_logo} alt="Spotify" />
          <h1 className='text-white text-3xl font-bold mb-2'>
            {isSignUp ? 'Sign up for Spotify' : 'Log in to Spotify'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-white text-sm font-medium mb-2'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 rounded bg-[#121212] text-white border border-[#727272] focus:border-white outline-none'
              placeholder='Enter your email'
              required
            />
          </div>

          {isSignUp && (
            <div>
              <label className='block text-white text-sm font-medium mb-2'>
                Display name
              </label>
              <input
                type='text'
                name='displayName'
                value={formData.displayName}
                onChange={handleChange}
                className='w-full p-3 rounded bg-[#121212] text-white border border-[#727272] focus:border-white outline-none'
                placeholder='Enter a profile name'
              />
            </div>
          )}

          <div>
            <label className='block text-white text-sm font-medium mb-2'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full p-3 rounded bg-[#121212] text-white border border-[#727272] focus:border-white outline-none'
              placeholder='Enter your password'
              required
            />
          </div>

          {isSignUp && (
            <div>
              <label className='block text-white text-sm font-medium mb-2'>
                Confirm password
              </label>
              <input
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                className='w-full p-3 rounded bg-[#121212] text-white border border-[#727272] focus:border-white outline-none'
                placeholder='Confirm your password'
                required
              />
            </div>
          )}

          <button
            type='submit'
            className='w-full bg-[#1db954] hover:bg-[#1ed760] text-black font-bold py-3 px-4 rounded-full transition-colors'
          >
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-gray-400'>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className='text-white hover:text-[#1db954] ml-2 underline'
            >
              {isSignUp ? 'Log in here' : 'Sign up for Spotify'}
            </button>
          </p>
        </div>

        <div className='mt-8 pt-6 border-t border-[#727272]'>
          <button
            onClick={() => onLogin({ email: 'demo@spotify.com', displayName: 'Demo User' })}
            className='w-full bg-[#1877f2] hover:bg-[#166fe5] text-white font-medium py-3 px-4 rounded-full transition-colors'
          >
            Continue as Demo User
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login