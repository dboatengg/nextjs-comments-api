import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const isApiRoute = request.nextUrl.pathname.startsWith("/api/comments");

  // Log for debugging
  console.log("[MIDDLEWARE] method:", request.method, "path:", request.nextUrl.pathname, "token:", request.cookies.get("token")?.value);

  // Protect write operations
  if (isApiRoute && ["POST", "PUT", "DELETE"].includes(request.method)) {
    const token = request.cookies.get("token")?.value;

    if (token !== "securetoken123") {
      console.log("[MIDDLEWARE] Unauthorized access attempt");
      return new NextResponse("Unauthorized", { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/comments/:path*"],
};
