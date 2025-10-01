// app/robots.txt/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.kratosintelligence.com";

  const content = `User-agent: *
Allow: /
Sitemap: ${base}/sitemap.xml
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
