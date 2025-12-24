import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect dashboard routes
  if (pathname.startsWith("/dashboard")) {
    // Check for session cookie (simplified - in production use iron-session)
    const sessionCookie = request.cookies.get("session");
    
    if (!sessionCookie) {
      // Redirect to login or home
      return NextResponse.redirect(new URL("/account", request.url));
    }

    // In production, verify the session and check for OWNER role
    // For now, we'll allow access if session exists
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
