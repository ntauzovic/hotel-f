import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/rooms']
const authRoutes = ['/login', '/register', '/home']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionCookie = request.cookies.get('laravel_session')
  const isAuthenticated = !!sessionCookie

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
