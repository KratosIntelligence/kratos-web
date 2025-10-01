// components/SeoJsonLd.tsx
"use client";
import Script from "next/script";

type Props = { siteUrl: string };

export default function SeoJsonLd({ siteUrl }: Props) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kratos Intelligence",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kratos Intelligence",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="kratos-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([org, website]) }}
    />
  );
}
