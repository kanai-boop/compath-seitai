import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1918] text-white">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-0 mb-8">
          <div className="flex flex-col gap-1.5">
            <p className="text-[14px] font-bold tracking-[0.2em]">COMPATH</p>
            <p className="text-[11px] text-[#888888] tracking-widest">からだ整体院</p>
            <div className="mt-2 flex flex-col gap-1 text-[12px] text-[#666666]">
              <p>東京都世田谷区三軒茶屋 1-XX-XX</p>
              <p>三軒茶屋駅 徒歩3分</p>
              <p>10:00〜20:00（水曜定休）</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 md:items-end">
            {[
              { href: "/menu/", label: "施術メニュー・料金" },
              { href: "/voice/", label: "お客様の声" },
              { href: "/about/", label: "院長プロフィール" },
              { href: "/access/", label: "アクセス・問い合わせ" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-[12px] text-[#AAAAAA] hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="h-px bg-[#2A2A2A] mb-5" />

        <div className="flex flex-col gap-1">
          <p className="text-[11px] text-[#666666]">© 2024 からだ整体院 COMPATH</p>
          <p className="text-[10px] text-[#444444]">※これはサンプルサイトです。架空の店舗情報です。</p>
        </div>
      </div>
    </footer>
  );
}
