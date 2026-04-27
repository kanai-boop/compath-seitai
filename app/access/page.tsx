"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AccessPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main className="max-w-[390px] mx-auto w-full flex flex-col">

        {/* Hero */}
        <section className="bg-[#1E2B22] px-6 pt-10 pb-10 flex flex-col gap-3">
          <p className="text-[10px] tracking-[0.2em] text-[#7AAA8C] font-medium">ACCESS & CONTACT</p>
          <h1 className="text-[22px] font-bold text-white leading-snug tracking-tight">アクセス・問い合わせ</h1>
          <p className="text-[13px] text-[#9AB5A4]">三軒茶屋駅（東急田園都市線・世田谷線）徒歩3分</p>
        </section>

        <section className="bg-[#F5F4F1] px-5 py-10 flex flex-col gap-6">

          {/* Map */}
          <div className="h-48 rounded-xl bg-[#D8E4D8] flex items-center justify-center">
            <p className="text-[13px] text-[#4A6E55] font-medium tracking-wide">地図（Google Maps）</p>
          </div>

          {/* Info */}
          <div className="bg-white rounded-xl p-5 flex flex-col gap-4">
            <h2 className="text-[14px] font-bold text-[#1A1918]">店舗情報</h2>
            <div className="flex flex-col gap-3">
              {[
                { label: "住所", value: "東京都世田谷区三軒茶屋 1-XX-XX" },
                { label: "アクセス", value: "三軒茶屋駅（東急田園都市線・世田谷線）徒歩3分" },
                { label: "営業時間", value: "10:00〜20:00（最終受付 19:00）" },
                { label: "定休日", value: "水曜日（完全予約制）" },
              ].map((row, i) => (
                <div key={i} className="flex gap-3 items-start border-b border-[#F5F4F1] pb-3 last:border-0 last:pb-0">
                  <span className="text-[11px] font-semibold text-[#3D8A5A] w-14 shrink-0 pt-0.5">{row.label}</span>
                  <p className="text-[13px] text-[#444444] leading-relaxed">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LINE */}
          <div id="contact" className="bg-[#06C755] rounded-xl p-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[10px] tracking-[0.15em] text-[#04A045] font-semibold">LINE RESERVATION</p>
              <p className="text-[16px] font-bold text-white">LINEでかんたん予約</p>
            </div>
            <p className="text-[13px] text-white/80 leading-relaxed">
              友だち追加後、ご希望の日時・メニューをメッセージください。24時間受付中です。
            </p>
            <a href="#" className="block text-center py-[13px] rounded-lg bg-white text-[#06C755] font-bold text-[14px]">
              LINE 友だち追加
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-5 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-[10px] tracking-[0.15em] text-[#3D8A5A] font-semibold">CONTACT FORM</p>
              <h2 className="text-[15px] font-bold text-[#1A1918]">お問い合わせ・ご予約フォーム</h2>
            </div>

            {submitted ? (
              <div className="text-center py-8 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#EBF5EE] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="#3D8A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[14px] font-semibold text-[#1A1918]">送信が完了しました</p>
                <p className="text-[12px] text-[#888888]">2営業日以内にご連絡いたします。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { label: "お名前", type: "text", placeholder: "山田 花子", required: true },
                  { label: "メールアドレス", type: "email", placeholder: "example@email.com", required: true },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#444444]">
                      {field.label}
                      {field.required && <span className="text-[#C07050] ml-1">*</span>}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="h-11 rounded-lg bg-[#F5F4F1] border border-[#E8E5DF] px-4 text-[13px] text-[#1A1918] outline-none focus:border-[#3D8A5A] transition-colors"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#444444]">ご希望のメニュー</label>
                  <select className="h-11 rounded-lg bg-[#F5F4F1] border border-[#E8E5DF] px-4 text-[13px] text-[#1A1918] outline-none focus:border-[#3D8A5A] transition-colors appearance-none">
                    <option value="">選択してください</option>
                    <option>姿勢矯正コース</option>
                    <option>産後骨盤矯正コース</option>
                    <option>小顔矯正コース</option>
                    <option>腰痛集中ケア</option>
                    <option>初回お試し（¥3,980）</option>
                    <option>その他・ご相談</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#444444]">お問い合わせ内容</label>
                  <textarea
                    rows={4}
                    placeholder="ご質問・ご要望などをご記入ください"
                    className="rounded-lg bg-[#F5F4F1] border border-[#E8E5DF] px-4 py-3 text-[13px] text-[#1A1918] outline-none focus:border-[#3D8A5A] transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="w-full py-[14px] rounded-lg bg-[#3D8A5A] text-white font-bold text-[14px]">
                  送信する
                </button>
                <p className="text-[11px] text-[#BBBBBB] text-center">
                  ※これはサンプルサイトです。実際には送信されません。
                </p>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
