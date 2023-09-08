export { default } from 'next-auth/middleware';

// Protect routes with authentication
export const config = { matcher: ['/dashboard/:path*', '/profile/:path*', '/settings'] };
