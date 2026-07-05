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
              <div className="flex items-center gap-2">
                {/* Kajabi logo placeholder */}
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold">
                  K
                </div>
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
