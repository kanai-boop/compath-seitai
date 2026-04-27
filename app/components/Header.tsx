"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/menu/", label: "施術メニュー・料金" },
  { href: "/voice/", label: "お客様の声" },
  { href: "/about/", label: "院長プロフィール" },
  { href: "/access/", label: "アクセス" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#F0EFEC] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-[58px] md:h-[64px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col gap-0.5 shrink-0" onClick={() => setOpen(false)}>
          <span className="text-[13px] md:text-[14px] font-bold tracking-[0.2em] text-[#1A1918]">COMPATH</span>
          <span className="text-[9px] text-[#3D8A5A] tracking-widest">からだ整体院</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-[#444444] hover:text-[#3D8A5A] transition-colors tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/access/#contact"
            className="ml-2 text-[13px] font-bold text-white bg-[#3D8A5A] px-5 py-2.5 rounded-lg hover:bg-[#2E6B44] transition-colors tracking-wide"
          >
            LINE 予約
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label="メニュー"
        >
          <span className={`block w-[18px] h-[1.5px] bg-[#1A1918] transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-[#1A1918] transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-[#1A1918] transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <nav className="md:hidden bg-white border-t border-[#F0EFEC]">
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
