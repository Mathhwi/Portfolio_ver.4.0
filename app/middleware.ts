import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // NODE_ENV 환경 변수가 'production' (즉, 배포 환경)일 때
  // 그리고 요청 경로가 /admin으로 시작할 때
  if (process.env.NODE_ENV === 'production' && request.nextUrl.pathname.startsWith('/admin')) {
    // 홈페이지로 리다이렉트합니다.
    return NextResponse.redirect(new URL('/', request.url))
  }

  // 그 외의 경우에는 정상적으로 요청을 처리합니다.
  return NextResponse.next()
}

// 미들웨어가 실행될 경로를 지정합니다.
// /admin 또는 /admin/으로 시작하는 모든 경로에 해당됩니다.
export const config = {
  matcher: ['/admin', '/admin/:path*'],
} 