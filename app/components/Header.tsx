"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/menu/", label: "施術メニュー" },
  { href: "/voice/", label: "お客様の声" },
  { href: "/about/", label: "院長紹介" },
  { href: "/access/", label: "アクセス" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[390px] mx-auto px-5 h-[60px] flex items-center justify-between">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="text-sm font-bold tracking-[0.15em] text-[#1A1918]">COMPATH</span>
          <span className="text-[9px] text-[#3D8A5A]">からだ整体院</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 rounded bg-[#F5F4F1]"
          aria-label="メニューを開く"
        >
          <span className={`block w-5 h-0.5 bg-[#1A1918] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1A1918] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1A1918] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="bg-white border-t border-gray-100 max-w-[390px] mx-auto">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-4 text-sm text-[#1A1918] border-b border-gray-50 hover:bg-[#F5F4F1]"
            >
              {l.label}
            </Link>
          ))}
          <div className="p-4">
            <Link
              href="/access/#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center py-3 rounded-lg bg-[#3D8A5A] text-white text-sm font-bold"
            >
              LINE で予約する
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
