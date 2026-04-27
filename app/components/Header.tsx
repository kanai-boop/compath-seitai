"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/menu/", label: "施術メニュー・料金" },
  { href: "/voice/", label: "お客様の声" },
  { href: "/about/", label: "院長プロフィール" },
  { href: "/access/", label: "アクセス・問い合わせ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#F0EFEC] sticky top-0 z-50">
      <div className="max-w-[390px] mx-auto px-5 h-[58px] flex items-center justify-between">
        <Link href="/" className="flex flex-col gap-0.5" onClick={() => setOpen(false)}>
          <span className="text-[13px] font-bold tracking-[0.2em] text-[#1A1918]">COMPATH</span>
          <span className="text-[9px] text-[#3D8A5A] tracking-widest">からだ整体院</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label="メニュー"
        >
          <span className={`block w-[18px] h-[1.5px] bg-[#1A1918] transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-[#1A1918] transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-[#1A1918] transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="bg-white border-t border-[#F0EFEC] max-w-[390px] mx-auto">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-5 py-4 text-[13px] text-[#1A1918] border-b border-[#F0EFEC] hover:bg-[#F9F8F6]"
            >
              {l.label}
              <span className="text-[#CCCCCC] text-xs">›</span>
            </Link>
          ))}
          <div className="p-4">
            <Link
              href="/access/#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center py-[13px] rounded-lg bg-[#3D8A5A] text-white text-[13px] font-bold tracking-wide"
            >
              LINE で予約する
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
