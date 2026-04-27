import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "施術メニュー・料金 | からだ整体院 COMPATH",
  description:
    "COMPATHの施術メニューと料金一覧。姿勢矯正・骨盤矯正・小顔矯正・産後骨盤矯正・肩こりケアなど。初回限定¥3,980のお試し施術あり。東京・三軒茶屋の整体院。",
  alternates: { canonical: "https://compath-seitai.vercel.app/menu/" },
  openGraph: {
    title: "施術メニュー・料金 | からだ整体院 COMPATH",
    description: "姿勢矯正・骨盤矯正・小顔矯正・産後ケアなど。初回限定¥3,980〜。",
    url: "https://compath-seitai.vercel.app/menu/",
  },
};

const menus = [
  {
    category: "🦴  姿勢矯正コース",
    items: [
      { name: "全身姿勢矯正", price: "¥8,800", time: "約60分", desc: "骨格のゆがみを根本から改善。全身のバランスを整え、正しい姿勢へ導きます。" },
      { name: "肩こり・首こりケア", price: "¥6,600", time: "約40分", desc: "デスクワークによる肩・首のこりを集中ケア。血行促進と筋肉のリリースで軽快な毎日を。" },
    ],
  },
  {
    category: "🤰  産後骨盤矯正コース",
    items: [
      { name: "産後骨盤集中コース", price: "¥7,700", time: "約50分", desc: "産後の骨盤のゆがみを丁寧に矯正。体型の戻りをサポートし、腰痛・むくみの改善にも。", popular: true },
      { name: "産後全身リセット", price: "¥9,900", time: "約75分", desc: "骨盤矯正に加えて産後の全身のゆがみをリセット。体力の回復とボディラインの改善を目指します。" },
    ],
  },
  {
    category: "✨  小顔矯正コース",
    items: [
      { name: "小顔・フェイシャル矯正", price: "¥9,900", time: "約45分", desc: "顔のゆがみ・エラのはり・むくみを改善。フェイスラインをすっきり整えます。" },
    ],
  },
  {
    category: "🔧  腰痛・慢性痛ケア",
    items: [
      { name: "腰痛集中ケア", price: "¥7,150", time: "約50分", desc: "慢性的な腰痛の原因にアプローチ。骨盤・脊椎のアライメントを整え、根本から改善を目指します。" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="max-w-[390px] mx-auto w-full flex flex-col">

        {/* Hero */}
        <section className="bg-[#3D8A5A] px-5 py-8 flex flex-col items-center gap-3">
          <h1 className="text-[22px] font-bold text-white tracking-tight text-center">施術メニュー・料金</h1>
          <p className="text-[13px] text-[#A8D5B8] text-center leading-relaxed">お身体の状態に合わせて最適なコースをご提案します</p>
          <span className="bg-[#D89575] text-white text-sm font-bold px-4 py-2 rounded-full">初回限定 ¥3,980〜</span>
        </section>

        {/* Menus */}
        <section className="bg-[#F5F4F1] px-5 py-10 flex flex-col gap-8">
          {menus.map((cat, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              <h2 className="text-[16px] font-bold text-[#1A1918]">{cat.category}</h2>
              {cat.items.map((item, ii) => (
                <div key={ii} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="flex items-center justify-between px-4 pt-4 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[15px] font-bold text-[#1A1918]">{item.name}</span>
                      {item.popular && (
                        <span className="bg-[#D89575] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">人気</span>
                      )}
                    </div>
                    <span className="text-[16px] font-bold text-[#3D8A5A]">{item.price}</span>
                  </div>
                  <div className="h-px bg-[#F0F0F0]" />
                  <div className="px-4 py-3">
                    <p className="text-[12px] text-[#888888] mb-1">所要時間：{item.time}</p>
                    <p className="text-[13px] text-[#555555] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Initial Campaign */}
          <div className="bg-[#3D8A5A] rounded-2xl p-6">
            <h2 className="text-[16px] font-bold text-white mb-3">🎉  初回限定キャンペーン</h2>
            <p className="text-[13px] text-[#C8E8D4] leading-relaxed mb-5">
              どのコースでも初回は特別価格 ¥3,980 でお試しいただけます。まずはお気軽にご体験ください。
            </p>
            <Link
              href="/access/#contact"
              className="block text-center py-4 rounded-xl bg-white text-[#3D8A5A] font-bold text-base"
            >
              LINE で予約する
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-5 py-8 flex flex-col gap-3">
          <p className="text-sm text-[#444444] text-center">ご不明な点はお気軽にご相談ください</p>
          <Link href="/access/#contact" className="block text-center py-4 rounded-xl bg-[#3D8A5A] text-white font-bold text-base">お問い合わせ・ご予約</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
