'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!response.ok) {
        setError('Invalid password')
        setIsLoading(false)
        return
      }

      // Redirect to home page
      router.push('/')
    } catch (err) {
      setError('An error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-kajabi-white via-kajabi-lightGreen/5 to-kajabi-white">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <svg width="48" height="48" viewBox="247.5 144.331 119.839 119.839" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="247.5" y="144.331" width="119.839" height="119.839" fill="#0A0A0A" rx="3"/>
              <path d="M307.422 204.247L273.864 170.695H340.974L307.422 204.247Z" fill="url(#paint0_kajabi)"/>
              <path d="M340.974 237.793L273.865 237.804L307.422 204.246L340.974 237.793Z" fill="url(#paint1_kajabi)"/>
              <path d="M307.422 204.247L273.864 237.805V170.695L307.422 204.247Z" fill="url(#paint2_kajabi)"/>
              <defs>
                <linearGradient id="paint0_kajabi" x1="307.709" y1="204.54" x2="307.709" y2="171.057" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="paint1_kajabi" x1="307.416" y1="204.246" x2="274.227" y2="237.436" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.5"/>
                </linearGradient>
                <linearGradient id="paint2_kajabi" x1="274.227" y1="204.54" x2="307.709" y2="204.54" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-kajabi-black text-center mb-2">Hero Open House</h1>
          <p className="text-center text-kajabi-darkGreen/60 mb-8">Kajabi Internal Only</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-kajabi-darkGreen mb-2">
                Access Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-kajabi-lightGreen/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-kajabi-warmTan focus:border-transparent text-kajabi-black"
                disabled={isLoading}
                autoFocus
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 bg-kajabi-warmTan text-white rounded-lg font-semibold hover:bg-kajabi-darkBrown transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying...' : 'Access'}
            </button>
          </form>

          <p className="text-xs text-kajabi-darkGreen/50 text-center mt-6">
            This is a private, internal tool for Kajabi employees.
          </p>
        </div>
      </div>
    </div>
  )
}
