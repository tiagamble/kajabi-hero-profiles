import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kajabi Hero Open House - Profiles',
  description: 'Interactive flip card profiles for Kajabi Heroes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg width="32" height="32" viewBox="247.5 144.331 119.839 119.839" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <rect x="247.5" y="144.331" width="119.839" height="119.839" fill="#0A0A0A" rx="3"/>
                  <path d="M307.422 204.247L273.864 170.695H340.974L307.422 204.247Z" fill="url(#paint0_kajabi_header)"/>
                  <path d="M340.974 237.793L273.865 237.804L307.422 204.246L340.974 237.793Z" fill="url(#paint1_kajabi_header)"/>
                  <path d="M307.422 204.247L273.864 237.805V170.695L307.422 204.247Z" fill="url(#paint2_kajabi_header)"/>
                  <defs>
                    <linearGradient id="paint0_kajabi_header" x1="307.709" y1="204.54" x2="307.709" y2="171.057" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="white" stopOpacity="0.8"/>
                    </linearGradient>
                    <linearGradient id="paint1_kajabi_header" x1="307.416" y1="204.246" x2="274.227" y2="237.436" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.3"/>
                      <stop offset="1" stopColor="white" stopOpacity="0.5"/>
                    </linearGradient>
                    <linearGradient id="paint2_kajabi_header" x1="274.227" y1="204.54" x2="307.709" y2="204.54" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.8"/>
                      <stop offset="1" stopColor="white" stopOpacity="0.5"/>
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className="text-2xl font-bold text-slate-900">Hero Open House</h1>
              </div>
              <div className="text-sm text-slate-600">
                July 13, 2026
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
      </body>
    </html>
  )
}
