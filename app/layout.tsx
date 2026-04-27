import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://compath-seitai.vercel.app"),
  title: {
    default: "からだ整体院 COMPATH（コンパス）｜三軒茶屋の美容整体・姿勢矯正",
    template: "%s | からだ整体院 COMPATH",
  },
  description:
    "東京・三軒茶屋の整体院COMPATH（コンパス）。姿勢矯正・骨盤矯正・小顔矯正・産後ケアに対応。国家資格保有の施術者が丁寧にカウンセリング。三軒茶屋駅徒歩3分・完全予約制。",
  keywords: ["整体", "三軒茶屋", "姿勢矯正", "骨盤矯正", "産後ケア", "小顔矯正", "肩こり", "腰痛"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "からだ整体院 COMPATH",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "からだ整体院 COMPATH（コンパス）",
  alternateName: "COMPATH",
  description:
    "東京都世田谷区三軒茶屋にある美容整体院。姿勢矯正・骨盤矯正・小顔矯正・産後骨盤矯正に対応。国家資格保有の施術者が一人ひとりに合わせたオーダーメイド施術を提供。",
  url: "https://compath-seitai.vercel.app",
  telephone: "※サンプルサイトのため非公開",
  address: {
    "@type": "PostalAddress",
    streetAddress: "三軒茶屋 1-XX-XX",
    addressLocality: "世田谷区",
    addressRegion: "東京都",
    postalCode: "154-0004",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.6437,
    longitude: 139.6686,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  priceRange: "¥3,980〜¥9,900",
  currenciesAccepted: "JPY",
  paymentAccepted: "現金, クレジットカード",
  image: "https://compath-seitai.vercel.app/og-image.png",
  hasMap: "https://maps.google.com/?q=三軒茶屋",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "完全予約制", value: true },
    { "@type": "LocationFeatureSpecification", name: "女性施術者在籍", value: true },
  ],
  servesCuisine: undefined,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
