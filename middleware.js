// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const token = request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
        return NextResponse.json({ message: 'Authentication token required' }, { status: 401 });
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        // jwtVerify will throw an error if the token is invalid
        const { payload } = await jwtVerify(token, secret);
        
        // You can add the user ID to the request headers to be used in the API route
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-user-id', payload.user_id);

        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });

    } catch (error) {
        return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/passwords/:path*', // Protects all routes under /api/passwords
};