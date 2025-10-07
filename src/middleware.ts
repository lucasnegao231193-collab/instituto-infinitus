import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Por enquanto, apenas permitir acesso a todas as rotas
  // A proteção de rotas será feita no lado do cliente através do useAuth
  
  // Rotas protegidas que precisam de autenticação
  const protectedRoutes = ['/dashboard']
  
  const isProtectedRoute = protectedRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  )

  // Para rotas protegidas, deixar o componente React lidar com a autenticação
  // Isso permite que o useAuth hook redirecione adequadamente
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}
