import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "2fc59430-9980-44c1-a09f-0408aab37ec2");
  requestHeaders.set("x-createxyz-project-group-id", "3f40a163-4b4a-42ba-9fd2-e512dde3f11a");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}