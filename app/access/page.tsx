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
        <section className="bg-[#3D8A5A] px-5 py-8 flex flex-col items-center gap-2">
          <h1 className="text-[20px] font-bold text-white tracking-tight text-center">アクセス・問い合わせ</h1>
          <p className="text-[13px] text-[#A8D5B8] text-center">三軒茶屋駅から徒歩3分</p>
        </section>

        <section className="bg-[#F5F4F1] px-5 py-10 flex flex-col gap-6">

          {/* Map placeholder */}
          <div className="h-48 rounded-2xl bg-[#C8D8C0] flex items-center justify-center shadow-sm">
            <div className="text-center">
              <p className="text-4xl mb-2">📍</p>
              <p className="text-sm font-semibold text-[#3D8A5A]">三軒茶屋駅 徒歩3分</p>
              <p className="text-[12px] text-[#666666] mt-1">東急田園都市線・世田谷線</p>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <h2 className="text-[15px] font-bold text-[#1A1918]">店舗情報</h2>
            {[
              { label: "住所", value: "東京都世田谷区三軒茶屋 1-XX-XX" },
              { label: "アクセス", value: "東急田園都市線・世田谷線 三軒茶屋駅 徒歩3分" },
              { label: "営業時間", value: "10:00〜20:00（最終受付 19:00）" },
              { label: "定休日", value: "水曜日（完全予約制）" },
              { label: "電話", value: "※サンプルサイトのため非公開" },
            ].map((row, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[12px] text-[#3D8A5A] font-semibold w-16 shrink-0 pt-0.5">{row.label}</span>
                <p className="text-[13px] text-[#444444] leading-relaxed flex-1">{row.value}</p>
              </div>
            ))}
          </div>

          {/* LINE */}
          <div id="contact" className="bg-[#06C755] rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#04A045] flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">LINE</span>
              </div>
              <p className="text-[15px] font-bold text-white">LINEでカンタン予約</p>
            </div>
            <p className="text-[13px] text-[#C8F0D4] leading-relaxed">
              友だち追加後、ご希望の日時・メニューをメッセージください。24時間受付中！
            </p>
            <a
              href="#"
              className="block text-center py-4 rounded-xl bg-white text-[#06C755] font-bold text-sm"
            >
              LINE 友だち追加
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-[15px] font-bold text-[#1A1918] mb-5">お問い合わせ・ご予約フォーム</h2>
            {submitted ? (
              <div className="text-center py-6">
                <p className="text-2xl mb-3">✅</p>
                <p className="text-sm font-semibold text-[#3D8A5A]">送信が完了しました</p>
                <p className="text-[12px] text-[#666666] mt-2">2営業日以内にご連絡いたします。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#444444]">お名前 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="田中 みのり"
                    className="h-11 rounded-lg bg-[#F5F4F1] border border-[#E0E0E0] px-3 text-[13px] text-[#1A1918] outline-none focus:border-[#3D8A5A]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#444444]">メールアドレス <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="h-11 rounded-lg bg-[#F5F4F1] border border-[#E0E0E0] px-3 text-[13px] text-[#1A1918] outline-none focus:border-[#3D8A5A]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#444444]">ご希望のメニュー</label>
                  <select className="h-11 rounded-lg bg-[#F5F4F1] border border-[#E0E0E0] px-3 text-[13px] text-[#1A1918] outline-none focus:border-[#3D8A5A]">
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
                    className="rounded-lg bg-[#F5F4F1] border border-[#E0E0E0] px-3 py-2.5 text-[13px] text-[#1A1918] outline-none focus:border-[#3D8A5A] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#3D8A5A] text-white font-bold text-base"
                >
                  送信する
                </button>
                <p className="text-[11px] text-[#888888] text-center">
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
