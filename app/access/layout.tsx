import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アクセス・問い合わせ | からだ整体院 COMPATH",
  description:
    "からだ整体院COMPATHへのアクセス方法と問い合わせフォーム。東京・三軒茶屋駅（東急田園都市線・世田谷線）から徒歩3分。営業時間10:00〜20:00・水曜定休・完全予約制。",
  alternates: { canonical: "https://compath-seitai.vercel.app/access/" },
  openGraph: {
    title: "アクセス・問い合わせ | からだ整体院 COMPATH",
    description: "三軒茶屋駅徒歩3分。営業時間10:00〜20:00（水曜定休）。LINE予約・お問い合わせフォームあり。",
    url: "https://compath-seitai.vercel.app/access/",
  },
};

export default function AccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
