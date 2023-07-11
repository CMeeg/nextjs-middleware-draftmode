import type { NextRequest } from 'next/server'
import { draftMode } from 'next/headers'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    draftMode().enable()
  }
}
