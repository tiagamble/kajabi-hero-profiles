import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Allow API routes and login page
  if (pathname.startsWith('/api/') || pathname === '/login') {
    return NextResponse.next()
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('kajabi-auth')

  // If no auth cookie, redirect to login
  if (!authCookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
