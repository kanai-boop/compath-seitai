import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1918] text-white">
      <div className="max-w-[390px] mx-auto px-5 py-8">
        <div className="mb-5">
          <p className="text-base font-bold tracking-[0.1em] mb-1">COMPATH</p>
          <p className="text-xs text-[#888888]">からだ整体院</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
          <Link href="/menu/" className="text-xs text-[#AAAAAA] hover:text-white">施術メニュー</Link>
          <Link href="/voice/" className="text-xs text-[#AAAAAA] hover:text-white">お客様の声</Link>
          <Link href="/about/" className="text-xs text-[#AAAAAA] hover:text-white">院長紹介</Link>
          <Link href="/access/" className="text-xs text-[#AAAAAA] hover:text-white">アクセス</Link>
        </nav>

        <div className="h-px bg-[#333333] mb-5" />

        <div className="flex flex-col gap-1">
          <p className="text-xs text-[#666666]">© 2024 からだ整体院 COMPATH</p>
          <p className="text-[10px] text-[#555555]">※これはサンプルサイトです。架空の店舗情報です。</p>
        </div>
      </div>
    </footer>
  );
}
